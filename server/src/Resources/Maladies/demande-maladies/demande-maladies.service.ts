import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeMaladyDto } from './dto/create-demande-malady.dto';
import { UpdateDemandeMaladyDto } from './dto/update-demande-malady.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { format, getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DemandeMaladiesService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prisma.demamdeMaladies.findMany();
  }

  findOne(id: string) {
    return this.prisma.demamdeMaladies.findUnique({ where: { id } });
  }
  async create(createDemandeMaladyDto: CreateDemandeMaladyDto) {
    const currentyear = getYear(new Date());
    console.log(createDemandeMaladyDto);
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createDemandeMaladyDto.personelId },
    });
    const Checknaissanceontraiter = await this.prisma.demamdeMaladies.findFirst(
      {
        where: {
          personelId: createDemandeMaladyDto.personelId,
          Status: 'En traitement',
        },
      },
    );
    const Checknaissancepasencorevue =
      await this.prisma.demamdeMaladies.findFirst({
        where: {
          personelId: createDemandeMaladyDto.personelId,
          Status: null,
        },
      });
    const ChecknaissanceDocnecess = await this.prisma.demamdeMaladies.findFirst(
      {
        where: {
          personelId: createDemandeMaladyDto.personelId,
          Status: 'Document nécessaire ou pas valide',
        },
      },
    );
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
      if (createDemandeMaladyDto.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Maladies`;
        fs.mkdirSync(dir, { recursive: true });
        const filesFolder = path.join(
          dir,
          `${format(new Date(), 'dd-MM-yyyy-HH-mm-ss')}`,
        );
        fs.mkdirSync(filesFolder, { recursive: true });
        createDemandeMaladyDto.files.map((file) => {
          const filePath = path.join(filesFolder, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.demamdeMaladies.create({
        data: {
          id: this.uuid.Getuuid(),
          personelId: createDemandeMaladyDto.personelId,
          sousActiviteId: '5',
          Decription: createDemandeMaladyDto.description,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  update(id: string, updateDemandeMaladyDto: UpdateDemandeMaladyDto) {
    return this.prisma.demamdeMaladies.update({
      where: { id },
      data: updateDemandeMaladyDto,
    });
  }

  remove(id: string) {
    return this.prisma.demamdeMaladies.delete({
      where: { id },
    });
  }
}
