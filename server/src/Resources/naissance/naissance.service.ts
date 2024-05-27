import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNaissanceDto } from './Dto/createnaissance.dto';
import { UpdatenaissanceDto } from './Dto/updatenaissance.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../Helpers/UUID/uuid.service';
import { format, getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class NaissanceService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {
    console.log(this.uuid);
  }
  findAll() {
    return this.prisma.naissance.findMany();
  }

  findOne(id: string) {
    return this.prisma.naissance.findUnique({ where: { id } });
  }

  async create(createNaissanceDto: CreateNaissanceDto) {
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createNaissanceDto.personelId },
    });
    const Checknaissanceontraiter = await this.prisma.naissance.findFirst({
      where: {
        personelId: createNaissanceDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checknaissancepasencorevue = await this.prisma.naissance.findFirst({
      where: {
        personelId: createNaissanceDto.personelId,
        Status: null,
      },
    });
    const ChecknaissanceDocnecess = await this.prisma.naissance.findFirst({
      where: {
        personelId: createNaissanceDto.personelId,
        Status: 'Document nécessaire ou pas valide',
      },
    });
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
      if (createNaissanceDto.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-naissances}`;
        fs.mkdirSync(dir, { recursive: true });
        const filesFolder = path.join(
          dir,
          `${format(new Date(), 'dd-MM-yyyy-HH-mm-ss')}`,
        );
        fs.mkdirSync(filesFolder, { recursive: true });
        createNaissanceDto.files.map((file) => {
          const filePath = path.join(filesFolder, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.naissance.create({
        //@ts-ignore
        data: {
          id: this.uuid.Getuuid(),
          personelId: createNaissanceDto.personelId,
          sousActiviteId: '1',
          nombre: createNaissanceDto.nombre,
          Date: createNaissanceDto.Date,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  update(id: string, updatenaissanceDto: UpdatenaissanceDto) {
    return updatenaissanceDto;
  }

  remove(id: string) {
    return this.prisma.naissance.delete({ where: { id } });
  }
}
