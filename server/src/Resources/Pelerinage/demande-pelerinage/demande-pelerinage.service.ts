import { Injectable } from '@nestjs/common';
import { CreateDemandePelerinageDto } from './dto/create-demande-pelerinage.dto';
import { UpdateDemandePelerinageDto } from './dto/update-demande-pelerinage.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class DemandePelerinageService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prismaClient.demandePelerinage.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demandePelerinage.findUnique({
      where: { id },
    });
  }
  create(createDemandePelerinageDto: CreateDemandePelerinageDto) {
    const demandeWithId = {
      id: this.uuid,
      ...createDemandePelerinageDto,
    };
    return this.prismaClient.demandePelerinage.create({
      data: demandeWithId,
    });
  }
  update(id: string, updateDemandePelerinageDto: UpdateDemandePelerinageDto) {
    return this.prismaClient.demandePelerinage.update({
      where: { id },
      data: updateDemandePelerinageDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demandePelerinage.delete({ where: { id } });
  }
}
