import { Injectable } from '@nestjs/common';
import { CreateDemandeLangDto } from './dto/create-demande-lang.dto';
import { UpdateDemandeLangDto } from './dto/update-demande-lang.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class DemandeLangService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.demandeLang.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demandeLang.findUnique({ where: { id } });
  }
  create(createDemandeLangDto: CreateDemandeLangDto) {
    const demandeWithId = {
      id: this.uuid,
      ...createDemandeLangDto,
    };
    return this.prismaClient.demandeLang.create({ data: demandeWithId });
  }

  update(id: string, updateDemandeLangDto: UpdateDemandeLangDto) {
    return this.prismaClient.demandeLang.update({
      where: { id },
      data: updateDemandeLangDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demandeLang.delete({ where: { id } });
  }
}
