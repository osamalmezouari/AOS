import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandePelerinageDto } from './dto/create-demande-pelerinage.dto';
import { UpdateDemandePelerinageDto } from './dto/update-demande-pelerinage.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DemandePelerinageService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prisma.demandePelerinage.findMany();
  }

  findOne(id: string) {
    return this.prisma.demandePelerinage.findUnique({
      where: { id },
    });
  }
  async create(createDemandePelerinageDto: CreateDemandePelerinageDto) {
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createDemandePelerinageDto.personelId },
    });
    const pelerinageUUID = this.uuid.Getuuid();
    const Checkpelerinageontraiter =
      await this.prisma.demandePelerinage.findFirst({
        where: {
          personelId: createDemandePelerinageDto.personelId,
          Status: 'En traitement',
          annee: currentyear,
        },
      });
    const Checknaissancepasencorevue =
      await this.prisma.demandePelerinage.findFirst({
        where: {
          personelId: createDemandePelerinageDto.personelId,
          Status: null,
          annee: currentyear,
        },
      });
    const ChecknaissanceDocnecess =
      await this.prisma.demandePelerinage.findFirst({
        where: {
          personelId: createDemandePelerinageDto.personelId,
          Status: 'Documents requis',
          annee: currentyear,
        },
      });
    if (Checkpelerinageontraiter) {
      throw new HttpException(
        'Vous avez déjà une demande encore de traitment',
        HttpStatus.BAD_REQUEST,
      );
    }
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
    try {
      if (createDemandePelerinageDto.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-pelerinage\\${pelerinageUUID}`;
        fs.mkdirSync(dir, { recursive: true });
        createDemandePelerinageDto.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.demandePelerinage.create({
        data: {
          id: this.uuid.Getuuid(),
          personelId: createDemandePelerinageDto.personelId,
          sousActiviteId: '2',
          annee: currentyear,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }
  async update(id: string, updatepelerinage: UpdateDemandePelerinageDto) {
    const pelerinage = await this.prisma.demandePelerinage.findUnique({
      where: {
        id,
        personelId: updatepelerinage.personelId,
      },
    });
    if (!pelerinage) {
      throw new HttpException(
        'ya pas une demande avec ce id ou tu es pas l acces pour modifier cd demande',
        HttpStatus.BAD_REQUEST,
      );
    } else if (pelerinage) {
      const matchingPersonel = await this.prisma.personel.findUnique({
        where: {
          id: updatepelerinage.personelId,
        },
      });

      try {
        if (updatepelerinage.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${pelerinage.effet.getFullYear()}\\Aides_financières\\Demandes-pelerinage\\${id}`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updatepelerinage.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File updated at ${filePath}`);
          });
        }
        return this.prisma.demandePelerinage.update({
          where: {
            id,
          },
          data: {
            annee: updatepelerinage.annee,
          },
        });
      } catch {
        throw new HttpException(`error`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  remove(id: string) {
    return this.prisma.demandePelerinage.delete({ where: { id } });
  }
}
