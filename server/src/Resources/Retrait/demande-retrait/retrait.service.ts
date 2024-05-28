import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRetraitDto } from './dto/create-retrait.dto';
import { UpdateRetraitDto } from './dto/update-retrait.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class RetraitService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prismaClient.retrait.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.retrait.findUnique({ where: { id } });
  }
  async create(createRetraitDto: CreateRetraitDto) {
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prismaClient.personel.findUnique({
      where: { id: createRetraitDto.personelId },
    });
    if (!matchingPersonel) {
      throw new HttpException('Personel not found', HttpStatus.NOT_FOUND);
    }

    const CheckRetraitAccepted = await this.prismaClient.retrait.findFirst({
      where: { personelId: createRetraitDto.personelId, Status: 'ACCEPTE' },
    });
    const CheckRetraitontraiter = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createRetraitDto.personelId,
        Status: 'En traitement',
      },
    });
    const CheckRetraitpasencorevue = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createRetraitDto.personelId,
        Status: '',
      },
    });
    const CheckRetraitDocnecess = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createRetraitDto.personelId,
        Status: 'Document nécessaire ou pas valide',
      },
    });
    if (CheckRetraitpasencorevue) {
      throw new HttpException(
        "Vous avez déjà une demande n est pas n'a pas encore été examinée par l'administrateur.",
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckRetraitDocnecess) {
      throw new HttpException(
        'Vous avez déjà une demande avec des documents nécessaires ou pas valide. Vous pouvez modifier les documents dans votre profil.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckRetraitAccepted) {
      throw new HttpException(
        'Ce demande est unique dans la vie, vous avez déjà pris ce retrait.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckRetraitontraiter) {
      throw new HttpException(
        'Vous avez déjà une demande en cours de traitement. Vous pouvez modifier les documents.',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      if (createRetraitDto.files) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demande-Retrait`;
        fs.mkdirSync(dir, { recursive: true });
        createRetraitDto.files.forEach((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prismaClient.retrait.create({
        data: {
          id: this.uuid.Getuuid(),
          date: createRetraitDto.date,
          personelId: createRetraitDto.personelId,
          sousActiviteId: '4',
        },
      });
    } catch (error) {
      throw new HttpException(
        'An error occurred while processing your request.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  update(id: string, updateRetraitDto: UpdateRetraitDto) {
    return this.prismaClient.retrait.update({
      where: { id },
      data: updateRetraitDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.retrait.delete({ where: { id } });
  }
}
