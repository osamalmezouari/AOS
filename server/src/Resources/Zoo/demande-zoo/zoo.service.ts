import { Injectable } from '@nestjs/common';
import { CreateZooDto } from './dto/create-zoo.dto';
import { UpdateZooDto } from './dto/update-zoo.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class ZooService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prismaClient.zoo.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.zoo.findUnique({ where: { id } });
  }
  create(createZooDto: CreateZooDto) {
    const ZooWithID = {
      ...createZooDto,
      id: this.uuid.Getuuid(),
      sousActiviteId: '11',
      personelId: createZooDto.personelId,
    };
    return this.prismaClient.zoo.create({ data: ZooWithID });
  }
  update(id: string, updateZooDto: UpdateZooDto) {
    return this.prismaClient.zoo.update({
      where: { id },
      data: updateZooDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.zoo.delete({
      where: { id },
    });
  }
}
