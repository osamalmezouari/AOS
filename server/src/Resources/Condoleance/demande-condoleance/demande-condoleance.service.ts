import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeCondoleanceDto } from './dto/create-demande-condoleance.dto';
import { UpdateDemandeCondoleanceDto } from './dto/update-demande-condoleance.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { format, getYear } from 'date-fns';
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
    return this.prisma.demandeCondoleance.findUnique({ where: { id } });
  }

  async create(createCondoleanceDto: CreateDemandeCondoleanceDto) {
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
        Status: 'Document nécessaire ou pas valide',
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
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Condoleances`;
        fs.mkdirSync(dir, { recursive: true });
        const filesFolder = path.join(
          dir,
          `${format(new Date(), 'dd-MM-yyyy-HH-mm-ss')}`,
        );
        fs.mkdirSync(filesFolder, { recursive: true });
        createCondoleanceDto.files.map((file) => {
          const filePath = path.join(filesFolder, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.demandeCondoleance.create({
        //@ts-ignore
        data: {
          id: this.uuid.Getuuid(),
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

  update(id: string, updateDemandeCondoleanceDto: UpdateDemandeCondoleanceDto) {
    return this.prisma.demandeCondoleance.update({
      where: { id },
      data: updateDemandeCondoleanceDto,
    });
  }

  remove(id: string) {
    return this.prisma.demandeCondoleance.delete({ where: { id } });
  }
}
