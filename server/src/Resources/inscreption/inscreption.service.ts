import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateInscriptionDto } from './dto/createinscreption.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../Helpers/UUID/uuid.service';
import * as fs from 'fs';
import * as path from 'path';
import { getYear } from 'date-fns';
import { UpdateInscriptionDto } from './dto/updateinscreption.dto';

@Injectable()
export class InscriptionService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  async findAll() {
    return this.prisma.inscreption.findMany({
      include: {
        Personel: {
          select: {
            matricule: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.inscreption.findUnique({ where: { id } });
  }

  async create(createInscriptionDto: CreateInscriptionDto) {
    const personelemail = createInscriptionDto.email;
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { email: personelemail },
    });
    const currentYear = getYear(new Date());
    console.log(matchingPersonel);
    const CheckAdmin = await this.prisma.personel.findUnique({
      where: {
        id: matchingPersonel.id,
      },
      select: {
        isAdmin: true,
      },
    });
    if (CheckAdmin.isAdmin) {
      throw new HttpException(
        "Vous n'avez pas la possibilité de vous inscrire. Veuillez vous connecter directement",
        HttpStatus.BAD_REQUEST,
      );
    }
    const CheckThisYearInscreption = await this.prisma.inscreption.findMany({
      where: {
        personelId: matchingPersonel.id,
        status: true,
        annee: currentYear,
      },
    });
    if (CheckThisYearInscreption.length > 0) {
      throw new HttpException(
        'Vous êtes déjà inscrit cette année. Veuillez vous connecter',
        HttpStatus.BAD_REQUEST,
      );
    }
    const CheckEnCours = await this.prisma.inscreption.findFirst({
      where: {
        personelId: matchingPersonel.id,
        status: false,
        annee: currentYear,
      },
    });
    if (CheckEnCours) {
      throw new HttpException(
        'tu as deja un demande pas encore traiter par l administrateur',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      matchingPersonel &&
      createInscriptionDto.password === matchingPersonel.password
    ) {
      const matchingPersonelId = matchingPersonel.id;
      if (createInscriptionDto.file) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${new Date().getFullYear()}\\Aides_financières\\inscription`;
        fs.mkdirSync(dir, { recursive: true });
        const filePath = path.join(dir, createInscriptionDto.file.originalname);
        if (fs.existsSync(filePath)) {
          const newFilePath = path.join(
            dir,
            `${this.uuid.Getuuid()}_${createInscriptionDto.file.originalname}`,
          );
          fs.writeFileSync(newFilePath, createInscriptionDto.file.buffer);
          console.log(`File exists. New file created at ${newFilePath}`);
        } else {
          fs.writeFileSync(filePath, createInscriptionDto.file.buffer);
          console.log(`File written at ${filePath}`);
        }
      }
      const inscreptionData = {
        id: this.uuid.Getuuid(),
        annee: currentYear,
        SousActivitieId: '17',
        personelId: matchingPersonelId,
      };
      return this.prisma.inscreption.create({
        data: inscreptionData,
      });
    }
  }

  async update(id: string, updateInscriptionDto: UpdateInscriptionDto) {
    return this.prisma.inscreption.update({
      where: { id },
      data: {
        status: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.inscreption.delete({ where: { id } });
  }
}
