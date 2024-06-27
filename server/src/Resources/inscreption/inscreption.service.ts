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
    return this.prisma.inscreption.findMany();
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
    const userinscriptionStatus = await this.prisma.inscreption.findFirst({
      where: {
        personelId: matchingPersonel && matchingPersonel.id,
        status: true,
        annee: currentYear,
      },
    });
    const CheckPrevInscreptionFalse = await this.prisma.inscreption.findFirst({
      where: {
        personelId: matchingPersonel && matchingPersonel.id,
        status: false,
      },
    });
    if (CheckPrevInscreptionFalse) {
      throw new HttpException(
        'tu as deja un demande pas encore traiter tu peux modifier ce demande dans votre profile',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (
      matchingPersonel &&
      createInscriptionDto.password === matchingPersonel.password &&
      userinscriptionStatus === null
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
    } else if (
      matchingPersonel &&
      createInscriptionDto.password === matchingPersonel.password &&
      userinscriptionStatus
    ) {
      throw new HttpException(
        'Vous êtes déjà inscrit. Veuillez vous connecter',
        HttpStatus.UNAUTHORIZED,
      );
    } else {
      throw new HttpException(
        'Failed to create inscription',
        HttpStatus.FAILED_DEPENDENCY,
      );
    }
  }

  async update(id: string, updateInscriptionDto: UpdateInscriptionDto) {}

  async remove(id: string) {
    return this.prisma.inscreption.delete({ where: { id } });
  }
}
