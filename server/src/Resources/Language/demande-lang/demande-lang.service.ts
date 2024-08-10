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
    const Enfant_naissance = await this.prismaClient.enfants.findMany({
      where: {
        personelId: createDemandeLangDto.personelId,
        nom_fr: createDemandeLangDto.enfant,
      },
      select: {
        naissance: true,
      },
    });
    const Enfant_age = this.calculateAge(Enfant_naissance[0].naissance);
    const MaxAge = 21;
    const Max_Enfant_pour_ce_demande = 3;
    const Check_Enfant_dans_la_demande =
      await this.prismaClient.demandeLang.findMany({
        where: {
          personelId: createDemandeLangDto.personelId,
          annee: currentyear,
        },
        select: {
          enfant: true,
        },
      });
    const Check_Enfant_dans_la_demande_filtred = Array.from(
      new Set(Check_Enfant_dans_la_demande.map((record) => record.enfant)),
    );
    const check_enfant_if_have_already_anuelle_demande =
      await this.prismaClient.demandeLang.findMany({
        where: {
          enfant: createDemandeLangDto.enfant,
          personelId: createDemandeLangDto.personelId,
          periode: 'anuelle',
          annee: currentyear,
        },
      });
    if (Enfant_age > MaxAge) {
      throw new HttpException(
        'Age maximale pour ce demande est 21 ans',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (check_enfant_if_have_already_anuelle_demande.length > 0) {
      throw new HttpException(
        ' Vous avez déjà soumis une demande Annuelle.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (
      !Check_Enfant_dans_la_demande_filtred.includes(
        createDemandeLangDto.enfant,
      )
    ) {
      const Enfants_exisst = Check_Enfant_dans_la_demande_filtred.length;
      if (Enfants_exisst >= Max_Enfant_pour_ce_demande) {
        throw new HttpException(
          ` Vous avez déjà ${Max_Enfant_pour_ce_demande} enfants inscrits pour cette demande cette année. `,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
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
          sousActiviteId: '15',
          montant: createDemandeLangDto.montant,
          annee: currentyear,
          enfant: createDemandeLangDto.enfant,
          periode: createDemandeLangDto.periode,
          parentId: createDemandeLangDto.personelId,
        },
      });
    } catch (error) {
      return HttpStatus.FAILED_DEPENDENCY;
    }
  }

  async update(id: string, updateDemandeLang: UpdateDemandeLangDto) {
    const currentyear = getYear(new Date());
    const Enfant_naissance = await this.prismaClient.enfants.findMany({
      where: {
        personelId: updateDemandeLang.personelId,
        nom_fr: updateDemandeLang.enfant,
      },
      select: {
        naissance: true,
      },
    });
    const Enfant_age = this.calculateAge(Enfant_naissance[0].naissance);
    const MaxAge = 21;
    const Max_Enfant_pour_ce_demande = 3;
    const Check_Enfant_dans_la_demande =
      await this.prismaClient.demandeLang.findMany({
        where: {
          personelId: updateDemandeLang.personelId,
          annee: currentyear,
        },
        select: {
          enfant: true,
        },
      });

    // const check_enfant_if_have_already_anuelle_demande =
    //   await this.prismaClient.demandeLang.findMany({
    //     where: {
    //       enfant: updateDemandeLang.enfant,
    //       personelId: updateDemandeLang.personelId,
    //       periode: 'anuelle',
    //     },
    //   });
    // const Check_Enfant_dans_la_demande_filtred = Array.from(
    //   new Set(Check_Enfant_dans_la_demande.map((record) => record.enfant)),
    // );
    if (Enfant_age > MaxAge) {
      throw new HttpException(
        'Age maximale pour ce demande est 21 ans',
        HttpStatus.BAD_REQUEST,
      );
    }
    // if (check_enfant_if_have_already_anuelle_demande.length > 0) {
    //   throw new HttpException(
    //     ' Vous avez déjà soumis une demande Annuelle.',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    // if (
    //   !Check_Enfant_dans_la_demande_filtred.includes(updateDemandeLang.enfant)
    // ) {
    //   const Enfants_exisst = Check_Enfant_dans_la_demande_filtred.length;
    //   if (Enfants_exisst >= Max_Enfant_pour_ce_demande) {
    //     throw new HttpException(
    //       `Vous avez déjà ${Max_Enfant_pour_ce_demande} enfants inscrits pour cette demande cette année. `,
    //       HttpStatus.BAD_REQUEST,
    //     );
    //   }
    // }
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
            Status: null,
            montant: updateDemandeLang.montant,
            annee: currentyear,
            enfant: updateDemandeLang.enfant,
            periode: updateDemandeLang.periode,
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
  calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    if (
      todayMonth < birthMonth ||
      (todayMonth === birthMonth && todayDay < birthDay)
    ) {
      age--;
    }

    return age;
  }
}
