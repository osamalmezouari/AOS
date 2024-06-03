import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeExcursionDto } from './dto/create-demande-excursion.dto';
import { UpdateDemandeExcursionDto } from './dto/update-demande-excursion.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from 'src/Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'node:fs';
import * as path from 'node:path';

@Injectable()
export class DemandeExcursionService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prisma.demandeExcursion.findMany();
  }

  findOne(id: string) {
    return this.prisma.demandeExcursion.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(createDemandeExcursionDto: CreateDemandeExcursionDto) {
    const currentyear = getYear(new Date());
    const ExcursionNom = await this.prisma.excursion.findUnique({
      where: {
        id: createDemandeExcursionDto.ExcursionId,
      },
      select: {
        nom: true,
      },
    });
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createDemandeExcursionDto.personelId },
    });
    const Checkontraiter = await this.prisma.naissance.findFirst({
      where: {
        personelId: createDemandeExcursionDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checkpasencorevue = await this.prisma.naissance.findFirst({
      where: {
        personelId: createDemandeExcursionDto.personelId,
        Status: null,
      },
    });
    const CheckDocnecess = await this.prisma.naissance.findFirst({
      where: {
        personelId: createDemandeExcursionDto.personelId,
        Status: 'Documents requis',
      },
    });
    const findnombrelimit = await this.prisma.excursion.findUnique({
      where: {
        id: createDemandeExcursionDto.ExcursionId,
      },
      select: {
        nombre: true,
      },
    });
    const findRecordsnmber = await this.prisma.demandeExcursion.findMany({
      where: {
        id: createDemandeExcursionDto.ExcursionId,
        Status: 'Approuvées',
      },
      select: {
        id: true,
      },
    });

    if (findRecordsnmber.length >= findnombrelimit.nombre) {
      throw new HttpException(
        'la demande pour ce Excursion et complete',
        HttpStatus.BAD_REQUEST,
      );
    }

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
      if (createDemandeExcursionDto.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Excurssion\\${ExcursionNom.nom}\\${this.uuid.Getuuid()}`;
        fs.mkdirSync(dir, { recursive: true });
        createDemandeExcursionDto.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.demandeExcursion.create({
        data: {
          id: this.uuid.Getuuid(),
          personelId: createDemandeExcursionDto.personelId,
          Date: createDemandeExcursionDto.Date,
          ExcursionId: createDemandeExcursionDto.ExcursionId,
          sousActiviteId: createDemandeExcursionDto.sousActiviteId,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  //  update(id: string, updateDemandeExcursionDto: UpdateDemandeExcursionDto) {
  //    return this.prisma.demandeExcursion.update({
  //      where: {
  //    id,
  //      },
  //     data: { updateDemandeExcursionDto },
  // });
  //}

  remove(id: string) {
    return this.prisma.demandeExcursion.delete({
      where: {
        id,
      },
    });
  }
}
