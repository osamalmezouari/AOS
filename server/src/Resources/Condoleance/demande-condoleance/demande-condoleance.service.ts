import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeCondoleanceDto } from './dto/create-demande-condoleance.dto';
import { UpdateDemandeCondoleanceDto } from './dto/update-demande-condoleance.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DemandeCondoleanceService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prisma.demandeCondoleance.findMany();
  }

  findOne(id: string) {
    return this.prisma.demandeCondoleance.findUnique({
      where: { id },
      include: {
        typeCondoleance: true,
      },
    });
  }

  async create(createCondoleanceDto: CreateDemandeCondoleanceDto) {
    const condoleanceUUID = this.uuid.Getuuid();
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createCondoleanceDto.personelId },
    });
    const Checkontraiter = await this.prisma.naissance.findFirst({
      where: {
        personelId: createCondoleanceDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checkpasencorevue = await this.prisma.demandeCondoleance.findFirst({
      where: {
        personelId: createCondoleanceDto.personelId,
        Status: null,
      },
    });
    const CheckDocnecess = await this.prisma.demandeCondoleance.findFirst({
      where: {
        personelId: createCondoleanceDto.personelId,
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
      if (createCondoleanceDto.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Condoleances\\${condoleanceUUID}`;
        fs.mkdirSync(dir, { recursive: true });
        createCondoleanceDto.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.demandeCondoleance.create({
        data: {
          id: condoleanceUUID,
          personelId: createCondoleanceDto.personelId,
          sousActiviteId: '6',
          typeCondoleanceId: createCondoleanceDto.selectedDeceased,
          description: createCondoleanceDto.description,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  async update(
    id: string,
    updateDemandeCondoleance: UpdateDemandeCondoleanceDto,
  ) {
    const Condoleance = await this.prisma.demandeCondoleance.findUnique({
      where: {
        id,
        personelId: updateDemandeCondoleance.personelId,
      },
    });
    if (!Condoleance) {
      throw new HttpException(
        'ya pas une demande avec ce id',
        HttpStatus.BAD_REQUEST,
      );
    } else if (Condoleance) {
      const matchingPersonel = await this.prisma.personel.findUnique({
        where: {
          id: updateDemandeCondoleance.personelId,
        },
      });

      try {
        if (updateDemandeCondoleance.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${Condoleance.effet.getFullYear()}\\Aides_financières\\Demandes-Condoleances\\${id}`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updateDemandeCondoleance.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File written at ${filePath}`);
          });
        }
        return this.prisma.demandeCondoleance.update({
          where: {
            id,
          },
          data: {
            description: updateDemandeCondoleance.description,
            typeCondoleanceId: updateDemandeCondoleance.selectedDeceased,
            Status: null,
          },
        });
      } catch {
        throw new HttpException(`error`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  remove(id: string) {
    return this.prisma.demandeCondoleance.delete({ where: { id } });
  }
}
