import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCentreDto } from './dto/create-centre.dto';
import { UpdateCentreDto } from './dto/update-centre.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CentresService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  private getTimestampFromDateTimeString(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    return dateTime.getTime();
  }
  findAll() {
    return this.prismaClient.centre.findMany({
      include: {
        Vile: true,
      },
    });
  }

  async findCentresWithEmptyAppartements(Params: { dateStart: string }) {
    const DateStartWithmuliSec: number = this.getTimestampFromDateTimeString(
      Params.dateStart,
    );
    const dateStartObject = new Date(DateStartWithmuliSec);
    const AppartementsAcceptedAndWillbeDispo =
      await this.prismaClient.demandeEstivage.findMany({
        where: {
          Status: 'Approuvée',
          date_sortie: { lt: dateStartObject.toISOString() },
          centreId: { not: '0' },
          appartementId: { not: null },
        },
        include: {
          centre: true,
        },
      });

    console.log(
      'AppartementsAcceptedAndWillbeDispo:',
      AppartementsAcceptedAndWillbeDispo,
    );

    const appartementIdsInDemande =
      await this.prismaClient.demandeEstivage.findMany({
        select: { appartementId: true },
      });

    const appartementIdsInDemandeArray = appartementIdsInDemande
      .map((item) => item.appartementId)
      .filter((id) => id !== null);

    console.log('appartementIdsInDemandeArray:', appartementIdsInDemandeArray);
    const appartmentsNotInDemande =
      await this.prismaClient.appartement.findMany({
        where: { id: { notIn: appartementIdsInDemandeArray } },
        include: { centre: true },
      });

    console.log('appartmentsNotInDemande:', appartmentsNotInDemande);
    const allCentres = [
      ...AppartementsAcceptedAndWillbeDispo.map((item) => item.centre),
      ...appartmentsNotInDemande.map((item) => item.centre),
    ];

    console.log('allCentres:', allCentres);
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
      id: uuidv4(),
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

  async getAvailableApartmentsForDemande(demandeId: string) {
    const matchingDemande = await this.prismaClient.demandeEstivage.findUnique({
      where: { id: demandeId },
      include: { centre: true },
    });

    if (!matchingDemande) {
      throw new NotFoundException(`Demande with ID ${demandeId} not found`);
    }

    const dateStartWithMultiSec = this.getTimestampFromDateTimeString(
      matchingDemande.date_entre,
    );
    const dateStartObject = new Date(dateStartWithMultiSec);
    const approvedDemandes = await this.prismaClient.demandeEstivage.findMany({
      where: {
        Status: 'Approuvée',
        date_sortie: { lt: dateStartObject.toISOString() },
        centreId: { not: '0' },
        appartementId: { not: null },
      },
    });
    const appartementIdsInDemandes = Array.from(
      new Set(approvedDemandes.map((demande) => demande.appartementId)),
    );
    const availableAppartements = await this.prismaClient.appartement.findMany({
      where: {
        NOT: {
          id: {
            in: appartementIdsInDemandes,
          },
        },
      },
      include: { centre: true },
    });
    return availableAppartements;
  }
}
