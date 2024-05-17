import { Injectable } from '@nestjs/common';

import { PrismaClient, SousActivite } from '@prisma/client';
import { CreateSousActiviteDto } from './dto/CreateSousActivite.dto';
import { UpdateSousActiviteDto } from './dto/UpdateSousActivite.dto';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

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
