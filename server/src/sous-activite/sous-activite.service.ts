import { Injectable } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { PrismaClient } from '@prisma/client';
import { CreateSousActiviteDto } from './dto/CreateSousActivite.dto';
import { UpdateSousActiviteDto } from './dto/UpdateSousActivite.dto';

@Injectable()
export class SousActiviteService {
  constructor(private readonly prismaClient: PrismaClient) {}
  findAll() {
    return this.prismaClient.sousActivite.findMany();
  }
  findOne(id: string) {
    return this.prismaClient.sousActivite.findUnique({ where: { id } });
  }
  create(createSousActiviteDto: CreateSousActiviteDto) {
    const SousActiviteWithId = {
      id: uuid(),
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
