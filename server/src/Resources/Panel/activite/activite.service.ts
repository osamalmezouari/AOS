import { Injectable } from '@nestjs/common';
import { Activitie, PrismaClient } from '@prisma/client';
import { CreateActiviteDto } from './dto/CreateActivite.dto';
import { UpdateActiviteDto } from './dto/UpdateActivite.dto';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class ActiviteService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll(): Promise<Activitie[]> {
    return this.prismaClient.activitie.findMany();
  }
  findOne(id: string): Promise<Activitie> {
    return this.prismaClient.activitie.findUnique({ where: { id } });
  }
  create(createActiviteDto: CreateActiviteDto) {
    const ActiviteWithId = {
      id: this.uuid,
      ...createActiviteDto,
    };
    return this.prismaClient.activitie.create({ data: ActiviteWithId });
  }
  update(id: string, updateActiviteDto: UpdateActiviteDto) {
    return this.prismaClient.activitie.update({
      where: { id },
      data: updateActiviteDto,
    });
  }
  delete(id: string) {
    return this.prismaClient.activitie.delete({ where: { id } });
  }
}
