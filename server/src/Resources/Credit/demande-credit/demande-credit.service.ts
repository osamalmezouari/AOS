import { Injectable } from '@nestjs/common';
import { CreateDemandeCreditDto } from './dto/create-demande-credit.dto';
import { UpdateDemandeCreditDto } from './dto/update-demande-credit.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class DemandeCreditService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.demandeCredit.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demandeCredit.findUnique({ where: { id } });
  }
  create(createDemandeCreditDto: CreateDemandeCreditDto) {
    const demandeWithId = { id: this.uuid, ...createDemandeCreditDto };
    return this.prismaClient.demandeCredit.create({
      data: demandeWithId,
    });
  }
  update(id: string, updateDemandeCreditDto: UpdateDemandeCreditDto) {
    return this.prismaClient.demandeCondoleance.update({
      where: { id },
      data: updateDemandeCreditDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demandeCredit.delete({ where: { id } });
  }
}
