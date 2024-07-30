import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';
import CreateHandicapeDTO from './dto/CreateHandicape.dto';
import UpdateHandicapeDto from './dto/UpdateHandicape.dto';

@Injectable()
export class HandicapeService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prisma.demandeHandicape.findMany();
  }

  findOne(id: string) {
    return this.prisma.demandeHandicape.findUnique({
      where: { id },
    });
  }

  async create(createHandicape: CreateHandicapeDTO) {
    const HandicapeUUID = this.uuid.Getuuid();
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createHandicape.personelId },
    });
    const Checkontraiter = await this.prisma.demandeHandicape.findFirst({
      where: {
        personelId: createHandicape.personelId,
        Status: 'En traitement',
      },
    });
    const Checkpasencorevue = await this.prisma.demandeHandicape.findFirst({
      where: {
        personelId: createHandicape.personelId,
        Status: null,
      },
    });
    const CheckDocnecess = await this.prisma.demandeHandicape.findFirst({
      where: {
        personelId: createHandicape.personelId,
        Status: 'Documents requis',
      },
    });
    if (Checkpasencorevue) {
      throw new HttpException(
        "Vous avez déjà une demande n est pas n'a pas encore été examinée par l'administrateur.",
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckDocnecess) {
      throw new HttpException(
        'Vous avez déjà une demande avec des documents nécessaires ou pas valide. Vous pouvez modifier les documents dans votre profil.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (Checkontraiter) {
      throw new HttpException(
        'Vous avez déjà une demande en cours de traitement. Vous pouvez modifier les documents.',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      if (createHandicape.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Handicape\\${HandicapeUUID}`;
        fs.mkdirSync(dir, { recursive: true });
        createHandicape.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.demandeHandicape.create({
        data: {
          id: HandicapeUUID,
          personelId: createHandicape.personelId,
          sousActiviteId: '19',
          enfant: createHandicape.enfant,
          description: createHandicape.description,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  async update(id: string, updateHandicape: UpdateHandicapeDto) {
    const Handicape = await this.prisma.demandeHandicape.findUnique({
      where: {
        id,
        personelId: updateHandicape.personelId,
      },
    });
    if (!Handicape) {
      throw new HttpException(
        'ya pas une demande avec ce id',
        HttpStatus.BAD_REQUEST,
      );
    } else if (Handicape) {
      const matchingPersonel = await this.prisma.personel.findUnique({
        where: {
          id: updateHandicape.personelId,
        },
      });

      try {
        if (updateHandicape.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${Handicape.effet.getFullYear()}\\Aides_financières\\Demandes-Handicape\\${id}`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updateHandicape.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File written at ${filePath}`);
          });
        }
        return this.prisma.demandeHandicape.update({
          where: {
            id,
          },
          data: {
            description: updateHandicape.description,
            enfant: updateHandicape.enfant,
            Status: null,
          },
        });
      } catch {
        throw new HttpException(`error`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  remove(id: string) {
    return this.prisma.demandeHandicape.delete({ where: { id } });
  }
}
