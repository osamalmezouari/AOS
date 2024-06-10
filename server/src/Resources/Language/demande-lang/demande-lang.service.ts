import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeLangDto } from './dto/create-demande-lang.dto';
import { UpdateDemandeLangDto } from './dto/update-demande-lang.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
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
    const LangUUID = this.uuid.Getuuid();
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
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-lang\\${LangUUID}`;
        fs.mkdirSync(dir, { recursive: true });
        createDemandeLangDto.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prismaClient.demandeLang.create({
        data: {
          id: this.uuid.Getuuid(),
          personelId: createDemandeLangDto.personelId,
          description: createDemandeLangDto.description,
          sousActiviteId: '15',
        },
      });
    } catch (error) {
      return HttpStatus.FAILED_DEPENDENCY;
    }
  }

  async update(id: string, updateDemandeLang: UpdateDemandeLangDto) {
    const Lang = await this.prismaClient.demandeLang.findUnique({
      where: {
        id,
        personelId: updateDemandeLang.personelId,
      },
    });
    if (!Lang) {
      throw new HttpException(
        'ya pas une demande avec ce id',
        HttpStatus.BAD_REQUEST,
      );
    } else if (Lang) {
      const matchingPersonel = await this.prismaClient.personel.findUnique({
        where: {
          id: updateDemandeLang.personelId,
        },
      });

      try {
        if (updateDemandeLang.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${Lang.effet.getFullYear()}\\Aides_financières\\Demandes-lang\\${id}`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updateDemandeLang.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File written at ${filePath}`);
          });
        }
        return this.prismaClient.demandeLang.update({
          where: {
            id,
          },
          data: {
            description: updateDemandeLang.description,
            Status: null,
          },
        });
      } catch {
        throw new HttpException(`error`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  remove(id: string) {
    return this.prismaClient.demandeLang.delete({ where: { id } });
  }
}
