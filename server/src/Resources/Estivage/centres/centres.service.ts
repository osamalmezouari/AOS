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

  findAll() {
    return this.prismaClient.centre.findMany();
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
