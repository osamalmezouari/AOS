import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeEstivageDto } from './dto/create-demande-estivage.dto';
import { UpdateDemandeEstivageDto } from './dto/update-demande-estivage.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'node:fs';
import * as path from 'node:path';
@Injectable()
export class DemandeEstivageService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.demandeEstivage.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demandeEstivage.findUnique({
      where: { id },
      include: {
        personel: true,
        SousActivite: true,
        centre: true,
      },
    });
  }
  async create(createDemandeEstivageDto: CreateDemandeEstivageDto) {
    const EstivageUUID = this.uuid.Getuuid();
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prismaClient.personel.findUnique({
      where: { id: createDemandeEstivageDto.personelId },
    });
    const Checkontraiter = await this.prismaClient.demandeEstivage.findFirst({
      where: {
        personelId: createDemandeEstivageDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checknpasencorevue =
      await this.prismaClient.demandeEstivage.findFirst({
        where: {
          personelId: createDemandeEstivageDto.personelId,
          Status: null,
        },
      });
    const CheckDocnecess = await this.prismaClient.demandeEstivage.findFirst({
      where: {
        personelId: createDemandeEstivageDto.personelId,
        Status: 'Documents requis',
      },
    });
    if (Checknpasencorevue) {
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
      if (
        createDemandeEstivageDto.files.length > 0 &&
        matchingPersonel.matricule
      ) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-Esstivage\\${EstivageUUID}`;
        fs.mkdirSync(dir, { recursive: true });
        createDemandeEstivageDto.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }

      return this.prismaClient.demandeEstivage.create({
        data: {
          id: this.uuid.Getuuid(),
          date_entre: createDemandeEstivageDto.date_entre,
          date_sortie: createDemandeEstivageDto.date_sortie,
          sousActiviteId: '10',
          montant: createDemandeEstivageDto.montant,
          type: createDemandeEstivageDto.type,
          centreId: createDemandeEstivageDto.centreId,
          personelId: createDemandeEstivageDto.personelId,
          description: createDemandeEstivageDto.description,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }

  async update(id: string, updateDemandeEstivage: UpdateDemandeEstivageDto) {
    console.log('updateDemandeEstivage : ', updateDemandeEstivage);
    const Estivage = await this.prismaClient.demandeEstivage.findUnique({
      where: {
        id,
        personelId: updateDemandeEstivage.personelId,
      },
    });
    if (!Estivage) {
      throw new HttpException(
        'ya pas une demande avec ce id',
        HttpStatus.BAD_REQUEST,
      );
    } else if (Estivage) {
      const matchingPersonel = await this.prismaClient.personel.findUnique({
        where: {
          id: updateDemandeEstivage.personelId,
        },
      });

      try {
        if (updateDemandeEstivage.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${Estivage.effet.getFullYear()}\\Aides_financières\\Demandes-Essstivage\\${id}`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updateDemandeEstivage.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File written at ${filePath}`);
          });
        }
        return this.prismaClient.demandeEstivage.update({
          where: {
            id,
          },
          data: {
            description: updateDemandeEstivage.description,
            Status: null,
            type: updateDemandeEstivage.type,
            centreId: updateDemandeEstivage.centreId,
            date_entre: updateDemandeEstivage.date_entre,
            date_sortie: updateDemandeEstivage.date_sortie,
            montant: updateDemandeEstivage.montant,
          },
        });
      } catch (error) {
        throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  remove(id: string) {
    return this.prismaClient.demandeEstivage.delete({ where: { id } });
  }
}
