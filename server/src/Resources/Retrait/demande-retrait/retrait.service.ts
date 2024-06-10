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

    const CheckAccepted = await this.prismaClient.retrait.findFirst({
      where: { personelId: createRetraitDto.personelId, Status: 'Approuvées' },
    });
    const Checkontraiter = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createRetraitDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checkpasencorevue = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createRetraitDto.personelId,
        Status: null,
      },
    });
    const CheckDocnecess = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createRetraitDto.personelId,
        Status: 'Documents requis',
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
    if (CheckAccepted) {
      throw new HttpException(
        'Ce demande est unique dans la vie, vous avez déjà pris ce retrait.',
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

  async update(id: string, updateRetrait: UpdateRetraitDto) {
    const Retrait = await this.prismaClient.retrait.findUnique({
      where: {
        id,
        personelId: updateRetrait.personelId,
      },
    });
    if (!Retrait) {
      throw new HttpException(
        'ya pas une demande avec ce id',
        HttpStatus.BAD_REQUEST,
      );
    } else if (Retrait) {
      const matchingPersonel = await this.prismaClient.personel.findUnique({
        where: {
          id: updateRetrait.personelId,
        },
      });

      try {
        if (updateRetrait.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${Retrait.effet.getFullYear()}\\Aides_financières\\Demande-Retrait`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updateRetrait.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File written at ${filePath}`);
          });
        }
        return this.prismaClient.retrait.update({
          where: {
            id,
          },
          data: {
            date: updateRetrait.date,
            Status: null,
          },
        });
      } catch {
        throw new HttpException(`error`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  remove(id: string) {
    return this.prismaClient.retrait.delete({ where: { id } });
  }
}
