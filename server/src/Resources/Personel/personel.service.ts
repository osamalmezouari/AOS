import { Injectable } from '@nestjs/common';
import { Personel, PrismaClient } from '@prisma/client';
import { CreatepersonelDto } from './dto/Createpersonel.dto';
import { UpdatepersonelDto } from './dto/Updatepersonel.dto';
import { UuidService } from '../../Helpers/UUID/uuid.service';

@Injectable()
export class PersonelService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll(): Promise<Personel[]> {
    return this.prismaClient.personel
      .findMany
      //     {
      //   include: {
      //     demandeLang: true,
      //     retrait : true,
      //     Zoo:true
      //     demamdeMaladies: true,
      //     demandeCredit: true,
      //     demandePelerinage: true,
      //     demandeEstivage: true,
      //   },
      // }
      ();
  }
  async SingleSousActivitiesdemandesWithDetails(
    id: string,
    sousActiviteId: string,
  ) {
    const currentYear = new Date().getFullYear();
    const startDate = new Date(`${currentYear}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${currentYear + 1}-01-01T00:00:00.000Z`);
    if (sousActiviteId === '1') {
      const data = this.prismaClient.mariage.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '2') {
      const data = this.prismaClient.demandePelerinage.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '3') {
      const data = this.prismaClient.demandeCredit.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '4') {
      const data = this.prismaClient.retrait.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '5') {
      const data = this.prismaClient.demamdeMaladies.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '6') {
      const data = this.prismaClient.demandeCondoleance.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '10') {
      const data = this.prismaClient.demandeEstivage.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '11') {
      const data = this.prismaClient.zoo.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '12') {
      const data = this.prismaClient.demandeExcursion.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '13') {
      const data = this.prismaClient.naissance.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
    if (sousActiviteId === '14') {
      const data = this.prismaClient.rentreeScolaire.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        include: {
          SousActivite: {
            select: {
              nomAr: true,
              nomFr: true,
            },
          },
        },
      });
      return data;
    }
  }
  async PersonelDemandesWithDetails(id: string) {
    const alldemandes = await this.prismaClient.personel.findUnique({
      where: { id },
      select: {
        demandeLang: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        retrait: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        Zoo: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        demamdeMaladies: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        demandeCredit: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        demandePelerinage: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        demandeEstivage: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        demandeExcursion: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        mariage: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        condoleance: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        rentreeScolaire: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
        Naissance: {
          select: {
            Status: true,
            id: true,
            effet: true,
            SousActivite: {
              select: {
                nomAr: true,
                nomFr: true,
              },
            },
          },
        },
      },
    });
    return [
      ...alldemandes.demamdeMaladies,
      ...alldemandes.Naissance,
      ...alldemandes.Zoo,
      ...alldemandes.condoleance,
      ...alldemandes.demandeCredit,
      ...alldemandes.demandeEstivage,
      ...alldemandes.demandeExcursion,
      ...alldemandes.rentreeScolaire,
      ...alldemandes.demandePelerinage,
      ...alldemandes.retrait,
      ...alldemandes.mariage,
      ...alldemandes.demandeLang,
    ];
  }

  findOne(id: string): Promise<Personel> {
    return this.prismaClient.personel.findUnique({ where: { id: id } });
  }
  create(createpersonelDto: CreatepersonelDto) {
    const PersonelwhithId = {
      id: this.uuid,
      ...createpersonelDto,
    };
    return this.prismaClient.personel.create({ data: PersonelwhithId });
  }
  update(id: string, updatepersonelDto: UpdatepersonelDto): Promise<Personel> {
    return this.prismaClient.personel.update({
      data: updatepersonelDto,
      where: { id: id },
    });
  }
  delete(id: string): Promise<Personel> {
    return this.prismaClient.personel.delete({ where: { id: id } });
  }
}
