import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNaissanceDto } from './Dto/createnaissance.dto';
import { UpdatenaissanceDto } from './Dto/updatenaissance.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class NaissanceService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {
    console.log(this.uuid);
  }
  findAll() {
    return this.prisma.naissance.findMany();
  }

  findOne(id: string) {
    return this.prisma.naissance.findUnique({ where: { id } });
  }

  async create(createNaissanceDto: CreateNaissanceDto) {
    const NaissanceUUID = this.uuid.Getuuid();
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createNaissanceDto.personelId },
    });
    const Checknaissanceontraiter = await this.prisma.naissance.findFirst({
      where: {
        personelId: createNaissanceDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checknaissancepasencorevue = await this.prisma.naissance.findFirst({
      where: {
        personelId: createNaissanceDto.personelId,
        Status: null,
      },
    });
    const ChecknaissanceDocnecess = await this.prisma.naissance.findFirst({
      where: {
        personelId: createNaissanceDto.personelId,
        Status: 'Documents requis',
      },
    });
    if (Checknaissancepasencorevue) {
      throw new HttpException(
        "Vous avez déjà une demande n est pas n'a pas encore été examinée par l'administrateur.",
        HttpStatus.BAD_REQUEST,
      );
    }
    if (ChecknaissanceDocnecess) {
      throw new HttpException(
        'Vous avez déjà une demande avec des documents nécessaires ou pas valide. Vous pouvez modifier les documents dans votre profil.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (Checknaissanceontraiter) {
      throw new HttpException(
        'Vous avez déjà une demande en cours de traitement. Vous pouvez modifier les documents.',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      if (createNaissanceDto.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-naissances\\${NaissanceUUID}`;
        fs.mkdirSync(dir, { recursive: true });
        createNaissanceDto.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.naissance.create({
        data: {
          id: this.uuid.Getuuid(),
          personelId: createNaissanceDto.personelId,
          sousActiviteId: '13',
          nombre: createNaissanceDto.numberOfChildren,
          Date: createNaissanceDto.date,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  async update(id: string, updatenaissance: UpdatenaissanceDto) {
    const Naissance = await this.prisma.naissance.findUnique({
      where: {
        id,
        personelId: updatenaissance.personelId,
      },
    });
    if (!Naissance) {
      throw new HttpException(
        'ya pas une demande avec ce id',
        HttpStatus.BAD_REQUEST,
      );
    } else if (Naissance) {
      const matchingPersonel = await this.prisma.personel.findUnique({
        where: {
          id: updatenaissance.personelId,
        },
      });

      try {
        if (updatenaissance.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${Naissance.effet.getFullYear()}\\Aides_financières\\Demandes-naissances\\${id}`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updatenaissance.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File written at ${filePath}`);
          });
        }
        return this.prisma.naissance.update({
          where: {
            id,
          },
          data: {
            Date: updatenaissance.date,
            nombre: updatenaissance.numberOfChildren,
            Status: null,
          },
        });
      } catch {
        throw new HttpException(`error`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  remove(id: string) {
    return this.prisma.naissance.delete({ where: { id } });
  }
}
