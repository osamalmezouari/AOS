import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeEstivageDto } from './dto/create-demande-estivage.dto';
import { UpdateDemandeEstivageDto } from './dto/update-demande-estivage.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'node:fs';
import * as path from 'node:path';
@Injectable()
export class DemandeEstivageService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.demandeEstivage.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demandeEstivage.findUnique({
      where: { id },
      include: {
        personel: true,
        sousActivite: true,
        centre: true,
      },
    });
  }
  async create(createDemandeEstivageDto: CreateDemandeEstivageDto) {
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prismaClient.personel.findUnique({
      where: { id: createDemandeEstivageDto.personelId },
    });
    const Checkontraiter = await this.prismaClient.demandeEstivage.findFirst({
      where: {
        personelId: createDemandeEstivageDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checknpasencorevue =
      await this.prismaClient.demandeEstivage.findFirst({
        where: {
          personelId: createDemandeEstivageDto.personelId,
          Status: null,
        },
      });
    const CheckDocnecess = await this.prismaClient.demandeEstivage.findFirst({
      where: {
        personelId: createDemandeEstivageDto.personelId,
        Status: 'Document nécessaire ou pas valide',
      },
    });
    if (Checknpasencorevue) {
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
      if (
        createDemandeEstivageDto.files.length > 0 &&
        matchingPersonel.matricule
      ) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Esstivage`;
        fs.mkdirSync(dir, { recursive: true });
        const filesFolder = path.join(dir, `${this.uuid.Getuuid()}`);
        fs.mkdirSync(filesFolder, { recursive: true });
        createDemandeEstivageDto.files.map((file) => {
          const filePath = path.join(filesFolder, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }

      return this.prismaClient.demandeEstivage.create({
        //@ts-ignore
        data: {
          id: this.uuid.Getuuid(),
          ...createDemandeEstivageDto,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  update(id: string, updateDemandeEstivageDto: UpdateDemandeEstivageDto) {
    return this.prismaClient.demandeEstivage.update({
      where: { id },
      //@ts-ignore
      data: updateDemandeEstivageDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demandeEstivage.delete({ where: { id } });
  }
}
