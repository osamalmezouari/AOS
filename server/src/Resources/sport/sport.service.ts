import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';
import { CreateSportDto } from './dto/CreateSport.dto';
import UpdateSportDto from './dto/UpdateSport.dto';

@Injectable()
export class SportService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prisma.demandeSport.findMany();
  }

  findOne(id: string) {
    return this.prisma.demandeSport.findUnique({
      where: { id },
    });
  }

  async create(createSport: CreateSportDto) {
    const SportUUID = this.uuid.Getuuid();
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createSport.personelId },
    });
    const Checkontraiter = await this.prisma.demandeSport.findFirst({
      where: {
        personelId: createSport.personelId,
        Status: 'En traitement',
      },
    });
    const Checkpasencorevue = await this.prisma.demandeSport.findFirst({
      where: {
        personelId: createSport.personelId,
        Status: null,
      },
    });
    const CheckDocnecess = await this.prisma.demandeSport.findFirst({
      where: {
        personelId: createSport.personelId,
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
    if (Checkontraiter) {
      throw new HttpException(
        'Vous avez déjà une demande en cours de traitement. Vous pouvez modifier les documents.',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      if (createSport.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Sport\\${SportUUID}`;
        fs.mkdirSync(dir, { recursive: true });
        createSport.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.demandeSport.create({
        data: {
          id: SportUUID,
          personelId: createSport.personelId,
          sousActiviteId: '18',
          enfant: createSport.enfant,
          montant: createSport.montant,
          annee: currentyear,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  async update(id: string, updateSport: UpdateSportDto) {
    const Sport = await this.prisma.demandeSport.findUnique({
      where: {
        id,
        personelId: updateSport.personelId,
      },
    });
    if (!Sport) {
      throw new HttpException(
        'ya pas une demande avec ce id',
        HttpStatus.BAD_REQUEST,
      );
    } else if (Sport) {
      const matchingPersonel = await this.prisma.personel.findUnique({
        where: {
          id: updateSport.personelId,
        },
      });

      try {
        if (updateSport.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${Sport.effet.getFullYear()}\\Aides_financières\\Demandes-Sport\\${id}`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updateSport.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File written at ${filePath}`);
          });
        }
        return this.prisma.demandeSport.update({
          where: {
            id,
          },
          data: {
            enfant: updateSport.enfant,
            montant: updateSport.montant,
            Status: null,
          },
        });
      } catch {
        throw new HttpException(`error`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  remove(id: string) {
    return this.prisma.demandeSport.delete({ where: { id } });
  }
}
