import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandePelerinageDto } from './dto/create-demande-pelerinage.dto';
import { UpdateDemandePelerinageDto } from './dto/update-demande-pelerinage.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { format, getYear } from 'date-fns';
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
    console.log(createDemandePelerinageDto);
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createDemandePelerinageDto.personelId },
    });
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
          Status: 'Document nécessaire ou pas valide',
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
    // try {
    if (createDemandePelerinageDto.files && matchingPersonel.matricule) {
      const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-pelerinage`;
      fs.mkdirSync(dir, { recursive: true });
      const filesFolder = path.join(
        dir,
        `${format(new Date(), 'dd-MM-yyyy-HH-mm-ss')}`,
      );
      fs.mkdirSync(filesFolder, { recursive: true });
      createDemandePelerinageDto.files.map((file) => {
        const filePath = path.join(filesFolder, file.originalname);
        fs.writeFileSync(filePath, file.buffer);
        console.log(`File written at ${filePath}`);
      });
    }
    return this.prisma.demandePelerinage.create({
      //@ts-ignore
      data: {
        id: this.uuid.Getuuid(),
        personelId: createDemandePelerinageDto.personelId,
        sousActiviteId: '1',
        annee: currentyear,
      },
    });
    // } catch (error) {
    //   throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    // }
  }
  update(id: string, updateDemandePelerinageDto: UpdateDemandePelerinageDto) {
    return this.prisma.demandePelerinage.update({
      where: { id },
      data: updateDemandePelerinageDto,
    });
  }

  remove(id: string) {
    return this.prisma.demandePelerinage.delete({ where: { id } });
  }
}
