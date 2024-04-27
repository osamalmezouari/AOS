import { Injectable } from '@nestjs/common';
import { CreateCentresLinguistiqueDto } from './dto/create-centres-linguistique.dto';
import { UpdateCentresLinguistiqueDto } from './dto/update-centres-linguistique.dto';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CentresLinguistiqueService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.centresLang.findMany();
  }
  findOne(id: string) {
    return this.prismaClient.centresLang.findUnique({ where: { id } });
  }
  create(createCentresLinguistiqueDto: CreateCentresLinguistiqueDto) {
    const centreWithId = {
      id: this.uuid,
      ...createCentresLinguistiqueDto,
    };
    return this.prismaClient.centresLang.create({ data: centreWithId });
  }
  update(
    id: string,
    updateCentresLinguistiqueDto: UpdateCentresLinguistiqueDto,
  ) {
    return this.prismaClient.centresLang.update({
      where: { id },
      data: updateCentresLinguistiqueDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.centresLang.delete({
      where: { id },
    });
  }
}
