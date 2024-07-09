import { Injectable } from '@nestjs/common';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';
import { PrismaClient, Vile } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
@Injectable()
export class VillesService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.vile.findMany();
  }

  findOne(id: string): Promise<Vile> {
    return this.prismaClient.vile.findUnique({ where: { id } });
  }
  create(createVilleDto: CreateVilleDto) {
    const vileWithId = {
      id: this.uuid.Getuuid(),
      ...createVilleDto,
    };
    return this.prismaClient.vile.create({
      data: vileWithId,
    });
  }

  update(id: string, updateVilleDto: UpdateVilleDto) {
    return this.prismaClient.vile.update({
      where: { id },
      data: updateVilleDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.vile.delete({
      where: { id },
    });
  }
}
