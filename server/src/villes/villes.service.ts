import { Injectable } from '@nestjs/common';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';
import { v4 as uuid } from 'uuid';
import { Affectation, PrismaClient, Vile } from '@prisma/client';
@Injectable()
export class VillesService {
  constructor(private readonly prismaClient: PrismaClient) {}
  findAll() {
    return this.prismaClient.vile.findMany();
  }

  findOne(id: string): Promise<Vile> {
    return this.prismaClient.vile.findUnique({ where: { id } });
  }
  create(createVilleDto: CreateVilleDto) {
    const vileWithId = {
      id: uuid(),
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
