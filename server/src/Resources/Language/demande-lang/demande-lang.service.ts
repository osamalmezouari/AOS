import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeLangDto } from './dto/create-demande-lang.dto';
import { UpdateDemandeLangDto } from './dto/update-demande-lang.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { format, getYear } from 'date-fns';
import * as fs from 'node:fs';
import * as path from 'node:path';

@Injectable()
export class DemandeLangService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.demandeLang.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demandeLang.findUnique({ where: { id } });
  }
  async create(createDemandeLangDto: CreateDemandeLangDto) {
    console.log(createDemandeLangDto);
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prismaClient.personel.findUnique({
      where: { id: createDemandeLangDto.personelId },
    });
    const Checkontraiter = await this.prismaClient.demandeLang.findFirst({
      where: {
        personelId: createDemandeLangDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checkpasencorevue = await this.prismaClient.demandeLang.findFirst({
      where: {
        personelId: createDemandeLangDto.personelId,
        Status: null,
      },
    });
    const CheckDocnecess = await this.prismaClient.demandeLang.findFirst({
      where: {
        personelId: createDemandeLangDto.personelId,
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
      if (createDemandeLangDto.files) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-lang`;
        fs.mkdirSync(dir, { recursive: true });
        const filesFolder = path.join(
          dir,
          `${format(new Date(), 'dd-MM-yyyy-HH-mm-ss')}`,
        );
        fs.mkdirSync(filesFolder, { recursive: true });
        createDemandeLangDto.files.map((file) => {
          const filePath = path.join(filesFolder, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prismaClient.demandeLang.create({
        data: {
          id: this.uuid.Getuuid(),
          personelId: createDemandeLangDto.personelId,
          description: createDemandeLangDto.description,
          sousActiviteId: '14',
        },
      });
    } catch (error) {
      return HttpStatus.FAILED_DEPENDENCY;
    }
  }

  update(id: string, updateDemandeLangDto: UpdateDemandeLangDto) {
    return this.prismaClient.demandeLang.update({
      where: { id },
      data: updateDemandeLangDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demandeLang.delete({ where: { id } });
  }
}
