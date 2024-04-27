import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { CreateSousActiviteDto } from './dto/CreateSousActivite.dto';
import { UpdateSousActiviteDto } from './dto/UpdateSousActivite.dto';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class SousActiviteService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.sousActivite.findMany();
  }
  findOne(id: string) {
    return this.prismaClient.sousActivite.findUnique({ where: { id } });
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
