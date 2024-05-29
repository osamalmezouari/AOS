import { Injectable } from '@nestjs/common';
import { CreateCentreDto } from './dto/create-centre.dto';
import { UpdateCentreDto } from './dto/update-centre.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class CentresService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  private getTimestampFromDateTimeString(dateTimeString) {
    // Parse the date-time string into a JavaScript Date object
    const dateTime = new Date(dateTimeString);

    // Get the Unix timestamp (milliseconds) from the Date object
    return dateTime.getTime();
  }
  findAll() {
    return this.prismaClient.centre.findMany();
  }

  async findCentresWithEmptyAppartements(Params: { dateStart: string }) {
    const DateStartWithmuliSec: number = this.getTimestampFromDateTimeString(
      Params.dateStart,
    );
    const AppartementsAcceptedAndWillbeDispo =
      await this.prismaClient.demandeEstivage.findMany({
        where: {
          Status: 'Accepted',
          date_sortie: { lt: DateStartWithmuliSec.toString() },
          centreId: { not: '0' },
          date_entre: { lt: DateStartWithmuliSec.toString() },
          appartementId: { not: null },
        },
        include: {
          centre: true,
        },
      });

    const appartementIdsInDemande =
      await this.prismaClient.demandeEstivage.findMany({
        select: { appartementId: true },
      });
    const appartementIdsInDemandeArray = appartementIdsInDemande.map(
      (item) => item.appartementId,
    );

    const appartmentsNotInDemande =
      await this.prismaClient.appartement.findMany({
        where: { id: { notIn: appartementIdsInDemandeArray } },
        include: { centre: true },
      });

    const allCentres = [
      ...AppartementsAcceptedAndWillbeDispo.map((item) => item.centre),
      ...appartmentsNotInDemande.map((item) => item.centre),
    ];
    const uniqueCentreIds = new Set();

    const uniqueCentres = allCentres.filter((centre) => {
      if (uniqueCentreIds.has(centre.id)) {
        return false;
      } else {
        uniqueCentreIds.add(centre.id);
        return true;
      }
    });

    return uniqueCentres;
  }

  findOne(id: string) {
    return this.prismaClient.centre.findUnique({ where: { id } });
  }

  create(createCentreDto: CreateCentreDto) {
    const centreWithId = {
      id: this.uuid,
      ...createCentreDto,
    };
    return this.prismaClient.centre.create({ data: centreWithId });
  }

  update(id: string, updateCentreDto: UpdateCentreDto) {
    return this.prismaClient.centre.update({
      where: { id },
      data: updateCentreDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.centre.delete({
      where: { id },
    });
  }
}
