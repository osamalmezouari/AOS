import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../Helpers/UUID/uuid.service';
import { format, getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';
import { CreaterentreeScolaireDto } from './dto/createrentreeScolaire.dto';
import { UpdaterentreeScolaireDto } from './dto/updaterentreeScolaire.dto';

@Injectable()
export class RentreeScolaireService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {
    console.log(this.uuid);
  }
  findAll() {
    return this.prisma.rentreeScolaire.findMany();
  }

  findOne(id: string) {
    return this.prisma.rentreeScolaire.findUnique({ where: { id } });
  }

  async create(createrentreeScolaireDto: CreaterentreeScolaireDto) {
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createrentreeScolaireDto.personelId },
    });
    const Checknaissanceontraiter = await this.prisma.rentreeScolaire.findFirst(
      {
        where: {
          personelId: createrentreeScolaireDto.personelId,
          Status: 'En traitement',
        },
      },
    );
    const Checknaissancepasencorevue =
      await this.prisma.rentreeScolaire.findFirst({
        where: {
          personelId: createrentreeScolaireDto.personelId,
          Status: null,
        },
      });
    const ChecknaissanceDocnecess = await this.prisma.rentreeScolaire.findFirst(
      {
        where: {
          personelId: createrentreeScolaireDto.personelId,
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
      if (createrentreeScolaireDto && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-rentree-scolaire`;
        fs.mkdirSync(dir, { recursive: true });
        const filesFolder = path.join(
          dir,
          `${format(new Date(), 'dd-MM-yyyy-HH-mm-ss')}`,
        );
        fs.mkdirSync(filesFolder, { recursive: true });
        createrentreeScolaireDto.files.map((file) => {
          const filePath = path.join(filesFolder, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.rentreeScolaire.create({
        data: {
          id: this.uuid.Getuuid(),
          personelId: createrentreeScolaireDto.personelId,
          sousActiviteId: '14',
          nombre: createrentreeScolaireDto.numberOfChildren,
          Date: createrentreeScolaireDto.date,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  update(id: string, updatenaissanceDto: UpdaterentreeScolaireDto) {
    return updatenaissanceDto;
  }

  remove(id: string) {
    return this.prisma.naissance.delete({ where: { id } });
  }
}
