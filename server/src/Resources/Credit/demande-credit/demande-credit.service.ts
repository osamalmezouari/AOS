import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemandeCreditDto } from './dto/create-demande-credit.dto';
import { UpdateDemandeCreditDto } from './dto/update-demande-credit.dto';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DemandeCreditService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prisma.demandeCredit.findMany();
  }

  findOne(id: string) {
    return this.prisma.demandeCredit.findUnique({ where: { id } });
  }

  async create(createDemandeCreditDto: CreateDemandeCreditDto) {
    const currentyear = getYear(new Date());
    const CreditUUID = this.uuid.Getuuid();
    const matchingPersonel = await this.prisma.personel.findUnique({
      where: { id: createDemandeCreditDto.personelId },
    });
    const Checkontraiter = await this.prisma.demandeCredit.findFirst({
      where: {
        personelId: createDemandeCreditDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checkpasencorevue = await this.prisma.demandeCredit.findFirst({
      where: {
        personelId: createDemandeCreditDto.personelId,
        Status: null,
      },
    });
    const CheckDocnecess = await this.prisma.demandeCredit.findFirst({
      where: {
        personelId: createDemandeCreditDto.personelId,
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
      if (createDemandeCreditDto.files && matchingPersonel.matricule) {
        const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${currentyear}\\Aides_financières\\Demandes-credit\\${CreditUUID}`;
        fs.mkdirSync(dir, { recursive: true });
        createDemandeCreditDto.files.map((file) => {
          const filePath = path.join(dir, file.originalname);
          fs.writeFileSync(filePath, file.buffer);
          console.log(`File written at ${filePath}`);
        });
      }
      return this.prisma.demandeCredit.create({
        data: {
          id: this.uuid.Getuuid(),
          personelId: createDemandeCreditDto.personelId,
          sousActiviteId: '3',
          montant: createDemandeCreditDto.mantantCredit,
          description: createDemandeCreditDto.description,
        },
      });
    } catch (error) {
      throw new HttpException('Error', HttpStatus.FAILED_DEPENDENCY);
    }
  }
  async update(id: string, updateDemandeCredit: UpdateDemandeCreditDto) {
    const Credit = await this.prisma.demandeCredit.findUnique({
      where: {
        id,
        personelId: updateDemandeCredit.personelId,
      },
    });
    if (!Credit) {
      throw new HttpException(
        'ya pas une demande avec ce id ou tu es pas l acces pour modifier cd demande',
        HttpStatus.BAD_REQUEST,
      );
    } else if (Credit) {
      const matchingPersonel = await this.prisma.personel.findUnique({
        where: {
          id: updateDemandeCredit.personelId,
        },
      });

      try {
        if (updateDemandeCredit.files) {
          const dir = `C:\\AOS\\${matchingPersonel.matricule}\\${Credit.effet.getFullYear()}\\Aides_financières\\Demandes-credit\\${id}`;
          const ExisstFiles = fs.readdirSync(dir);
          ExisstFiles.map((filePath) => {
            fs.unlinkSync(path.join(dir, filePath));
          });
          updateDemandeCredit.files.map((file) => {
            const filePath = path.join(dir, file.originalname);
            fs.writeFileSync(filePath, file.buffer);
            console.log(`File updated at ${filePath}`);
          });
        }
        return this.prisma.demandeCredit.update({
          where: {
            id,
          },
          data: {
            description: updateDemandeCredit.description,
            montant: updateDemandeCredit.mantantCredit,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  remove(id: string) {
    return this.prisma.demandeCredit.delete({ where: { id } });
  }
}
