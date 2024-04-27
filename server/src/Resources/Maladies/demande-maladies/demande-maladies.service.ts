import { Injectable } from '@nestjs/common';
import { CreateDemandeMaladyDto } from './dto/create-demande-malady.dto';
import { UpdateDemandeMaladyDto } from './dto/update-demande-malady.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class DemandeMaladiesService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.demamdeMaladies.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demamdeMaladies.findUnique({ where: { id } });
  }
  create(createDemandeMaladyDto: CreateDemandeMaladyDto) {
    const demadeWithId = { id: this.uuid, ...createDemandeMaladyDto };
    return this.prismaClient.demamdeMaladies.create({
      data: demadeWithId,
    });
  }

  update(id: string, updateDemandeMaladyDto: UpdateDemandeMaladyDto) {
    return this.prismaClient.demamdeMaladies.update({
      where: { id },
      data: updateDemandeMaladyDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demamdeMaladies.delete({
      where: { id },
    });
  }
}
