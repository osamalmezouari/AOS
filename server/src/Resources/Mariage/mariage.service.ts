import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { mariage, PrismaClient } from '@prisma/client';
import { UpdatemariageDto } from './dto/updatemariage.dto';
import { CreatemariageDto } from './dto/createmariage.dto';
import { format, getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';
import { UuidService } from '../../Helpers/UUID/uuid.service';

@Injectable()
export class MariageService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  async findAll(): Promise<mariage[]> {
    return this.prisma.mariage.findMany();
  }

  async findOne(id: string): Promise<mariage> {
    return this.prisma.mariage.findUnique({ where: { id } });
  }

  async create(createmariage: CreatemariageDto) {
    console.log(createmariage);
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createmariage.personelId },
    });
    const CheckdemandeLmit = await this.prisma.mariage.findMany({
      where: { personelId: createmariage.personelId },
    });
    const CheckmariageAccepted = await this.prisma.mariage.findMany({
      where: { personelId: createmariage.personelId, Status: 'ACCEPTE' },
    });
    const Checkmariageontraiter = await this.prisma.mariage.findFirst({
      where: {
        personelId: createmariage.personelId,
        Status: 'En traitement',
      },
    });
    const Checkmariagepasencorevue = await this.prisma.mariage.findFirst({
      where: {
        personelId: createmariage.personelId,
        Status: '',
      },
    });
    const CheckmariageDocnecess = await this.prisma.mariage.findFirst({
      where: {
        personelId: createmariage.personelId,
        Status: 'Document nécessaire ou pas valide',
      },
    });
    if (Checkmariagepasencorevue) {
      throw new HttpException(
        "Vous avez déjà une demande n est pas n'a pas encore été examinée par l'administrateur.",
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckmariageDocnecess) {
      throw new HttpException(
        'Vous avez déjà une demande avec des documents nécessaires ou pas valide. Vous pouvez modifier les documents dans votre profil.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckmariageAccepted.length === 4) {
      throw new HttpException(
        'Vous avez 4 demande accepete , Ce demande est 4 fois dans la vie, vous avez déjà pris ce demande 4 fois.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckdemandeLmit.length > 4) {
      throw new HttpException(
        'Ce demande est 4 fois dans la vie, vous avez déjà pris ce demande 4 fois.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (Checkmariageontraiter) {
      throw new HttpException(
        'Vous avez déjà une demande en cours de traitement. Vous pouvez modifier les documents.',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      if (createmariage.files) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Mariages`;
        fs.mkdirSync(dir, { recursive: true });
        const filesFolder = path.join(
          dir,
          `${format(new Date(), 'dd-MM-yyyy-HH-mm-ss')}`,
        );
        fs.mkdirSync(filesFolder, { recursive: true });
        createmariage.files.map((file) => {
          const filePath = path.join(filesFolder, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.mariage.create({
        //@ts-ignore
        data: {
          id: this.uuid.Getuuid(),
          personelId: createmariage.personelId,
          description: createmariage.description,
          sousActiviteId: '1',
        },
      });
    } catch (error) {
      return HttpStatus.FAILED_DEPENDENCY;
    }
  }

  async update(id: string, updatemarigeDto: UpdatemariageDto) {
    return this.prisma.mariage.update({
      where: { id },
      data: updatemarigeDto,
    });
  }

  async remove(id: string) {
    return this.prisma.mariage.delete({ where: { id } });
  }
}
