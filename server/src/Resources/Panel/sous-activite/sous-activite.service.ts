import { Injectable } from '@nestjs/common';

import { PrismaClient, SousActivite } from '@prisma/client';
import { CreateSousActiviteDto } from './dto/CreateSousActivite.dto';
import { UpdateSousActiviteDto } from './dto/UpdateSousActivite.dto';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { AdminUpdateDto } from './dto/AdminUpdate.dto';

@Injectable()
export class SousActiviteService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll(): Promise<SousActivite[]> {
    return this.prismaClient.sousActivite.findMany();
  }
  async findOne(id: string) {
    return this.prismaClient.sousActivite.findUnique({
      where: { id },
      include: {
        pieces: {
          include: {
            piece: true,
          },
        },
      },
    });
  }

  async PersonelDashboardState(id: string) {
    const currentYear = new Date().getFullYear();
    const startDate = new Date(`${currentYear}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${currentYear + 1}-01-01T00:00:00.000Z`);
    const demandesEstivage = await this.prismaClient.demandeEstivage.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesPelerinage =
      await this.prismaClient.demandePelerinage.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: { Status: true },
      });

    const demandesMarriage = await this.prismaClient.mariage.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesCredit = await this.prismaClient.demandeCredit.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesMaladies = await this.prismaClient.demamdeMaladies.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesLang = await this.prismaClient.demandeLang.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesCondoleance =
      await this.prismaClient.demandeCondoleance.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: { Status: true },
      });

    const demandesZoo = await this.prismaClient.zoo.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesRentreeScolaire =
      await this.prismaClient.rentreeScolaire.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: { Status: true },
      });

    const demandesExcursion = await this.prismaClient.demandeExcursion.findMany(
      {
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: { Status: true },
      },
    );

    const demandesNaissance = await this.prismaClient.naissance.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesRetrait = await this.prismaClient.retrait.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesInscreption = await this.prismaClient.inscreption.findMany({
      where: {
        personelId: id,
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
    });

    return [
      ...demandesEstivage.map((demande) => demande.Status),
      ...demandesPelerinage.map((demande) => demande.Status),
      ...demandesMarriage.map((demande) => demande.Status),
      ...demandesCredit.map((demande) => demande.Status),
      ...demandesMaladies.map((demande) => demande.Status),
      ...demandesLang.map((demande) => demande.Status),
      ...demandesCondoleance.map((demande) => demande.Status),
      ...demandesZoo.map((demande) => demande.Status),
      ...demandesRentreeScolaire.map((demande) => demande.Status),
      ...demandesExcursion.map((demande) => demande.Status),
      ...demandesNaissance.map((demande) => demande.Status),
      ...demandesRetrait.map((demande) => demande.Status),
      ...demandesInscreption.map((demande) => demande.status),
    ];
  }

  async AdminDashboardState() {
    const currentYear = new Date().getFullYear();
    const startDate = new Date(`${currentYear}-01-01T00:00:00.000Z`);
    const endDate = new Date(`${currentYear + 1}-01-01T00:00:00.000Z`);
    const demandesEstivage = await this.prismaClient.demandeEstivage.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesPelerinage =
      await this.prismaClient.demandePelerinage.findMany({
        where: {
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: { Status: true },
      });

    const demandesMarriage = await this.prismaClient.mariage.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesCredit = await this.prismaClient.demandeCredit.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesMaladies = await this.prismaClient.demamdeMaladies.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesLang = await this.prismaClient.demandeLang.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesCondoleance =
      await this.prismaClient.demandeCondoleance.findMany({
        where: {
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: { Status: true },
      });

    const demandesZoo = await this.prismaClient.zoo.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesRentreeScolaire =
      await this.prismaClient.rentreeScolaire.findMany({
        where: {
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: { Status: true },
      });

    const demandesExcursion = await this.prismaClient.demandeExcursion.findMany(
      {
        where: {
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: { Status: true },
      },
    );

    const demandesNaissance = await this.prismaClient.naissance.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesRetrait = await this.prismaClient.retrait.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
      select: { Status: true },
    });

    const demandesInscreption = await this.prismaClient.inscreption.findMany({
      where: {
        effet: {
          gte: startDate,
          lt: endDate,
        },
      },
    });

    return [
      ...demandesEstivage.map((demande) => demande.Status),
      ...demandesPelerinage.map((demande) => demande.Status),
      ...demandesMarriage.map((demande) => demande.Status),
      ...demandesCredit.map((demande) => demande.Status),
      ...demandesMaladies.map((demande) => demande.Status),
      ...demandesLang.map((demande) => demande.Status),
      ...demandesCondoleance.map((demande) => demande.Status),
      ...demandesZoo.map((demande) => demande.Status),
      ...demandesRentreeScolaire.map((demande) => demande.Status),
      ...demandesExcursion.map((demande) => demande.Status),
      ...demandesNaissance.map((demande) => demande.Status),
      ...demandesRetrait.map((demande) => demande.Status),
      ...demandesInscreption.map((demande) => demande.status),
    ];
  }

  async PersonelStateforSingleSousActivitie(
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
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
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
    }
    if (sousActiviteId === '15') {
      const data = this.prismaClient.demandeLang.findMany({
        where: {
          personelId: id,
          effet: {
            gte: startDate,
            lt: endDate,
          },
        },
        select: {
          Status: true,
        },
      });
      return (await data).map((item) => item.Status);
    }
  }

  async AdminfetchSignledemande(demandeId: string, sousActiviteId: string) {
    if (sousActiviteId === '1') {
      const data = await this.prismaClient.mariage.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '2') {
      const data = await this.prismaClient.demandePelerinage.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '3') {
      const data = await this.prismaClient.demandeCredit.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '4') {
      const data = await this.prismaClient.retrait.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === ' 5') {
      const data = await this.prismaClient.demamdeMaladies.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '6') {
      const data = await this.prismaClient.demandeCondoleance.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '10') {
      const data = await this.prismaClient.demandeEstivage.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '11') {
      const data = await this.prismaClient.zoo.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '12') {
      const data = await this.prismaClient.excursion.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '13') {
      const data = await this.prismaClient.naissance.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '14') {
      const data = await this.prismaClient.rentreeScolaire.findUnique({
        where: { id: demandeId },
      });
      return data;
    } else if (sousActiviteId === '15') {
      const data = await this.prismaClient.demandeLang.findUnique({
        where: { id: demandeId },
      });
      return data;
    }
  }
  AdminUpdate(
    personelId: string,
    demandeId: string,
    sousActiviteId: string,
    adminUpdateDto: AdminUpdateDto,
  ) {
    if (sousActiviteId === '1') {
      return this.prismaClient.mariage.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: {
          ...adminUpdateDto,
        },
      });
    } else if (sousActiviteId === '2') {
      return this.prismaClient.demandePelerinage.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '3') {
      return this.prismaClient.demandeCredit.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '4') {
      return this.prismaClient.retrait.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '5') {
      return this.prismaClient.demamdeMaladies.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '6') {
      return this.prismaClient.demandeCondoleance.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '10') {
      return this.prismaClient.demandeEstivage.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: {
          montantAloue: adminUpdateDto.montantAloue || 0,
          appartementId: adminUpdateDto.appartementId,
          Status: adminUpdateDto.Status,
        },
      });
    } else if (sousActiviteId === '11') {
      return this.prismaClient.zoo.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '12') {
      return this.prismaClient.demandeExcursion.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '13') {
      return this.prismaClient.naissance.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '14') {
      return this.prismaClient.rentreeScolaire.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    } else if (sousActiviteId === '15') {
      return this.prismaClient.demandeLang.update({
        where: {
          id: demandeId,
          personelId: personelId,
        },
        data: adminUpdateDto,
      });
    }
  }
  create(createSousActiviteDto: CreateSousActiviteDto) {
    const SousActiviteWithId = {
      id: this.uuid,
      ...createSousActiviteDto,
    };
    return this.prismaClient.sousActivite.create({
      data: SousActiviteWithId,
    });
  }
  update(id: string, updateSousActiviteDto: UpdateSousActiviteDto) {
    return this.prismaClient.sousActivite.update({
      where: { id },
      data: updateSousActiviteDto,
    });
  }
  delete(id: string) {
    return this.prismaClient.sousActivite.delete({ where: { id } });
  }
}
