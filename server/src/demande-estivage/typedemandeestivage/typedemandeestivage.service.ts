import { Injectable } from '@nestjs/common';
import { CreateTypedemandeestivageDto } from './dto/create-typedemandeestivage.dto';
import { UpdateTypedemandeestivageDto } from './dto/update-typedemandeestivage.dto';
import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TypedemandeestivageService {
  constructor(private readonly prismaClient: PrismaClient) {}

  findAll() {
    return this.prismaClient.typeEsstivage.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.typeEsstivage.findUnique({ where: { id } });
  }

  create(createTypedemandeestivageDto: CreateTypedemandeestivageDto) {
    const typeWithId = {
      id: uuid(),
      ...createTypedemandeestivageDto,
    };
    return this.prismaClient.typeEsstivage.create({
      data: typeWithId,
    });
  }

  update(
    id: string,
    updateTypedemandeestivageDto: UpdateTypedemandeestivageDto,
  ) {
    return this.prismaClient.typeEsstivage.update({
      where: { id },
      data: updateTypedemandeestivageDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.typeEsstivage.delete({
      where: { id },
    });
  }
}
