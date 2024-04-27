import { Injectable } from '@nestjs/common';
import { CreateTypedemandeestivageDto } from './dto/create-typedemandeestivage.dto';
import { UpdateTypedemandeestivageDto } from './dto/update-typedemandeestivage.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class TypedemandeestivageService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prismaClient.typeEsstivage.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.typeEsstivage.findUnique({ where: { id } });
  }

  create(createTypedemandeestivageDto: CreateTypedemandeestivageDto) {
    const typeWithId = {
      id: this.uuid,
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
