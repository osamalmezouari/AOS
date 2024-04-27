import { Injectable } from '@nestjs/common';
import { CreateRetraitDto } from './dto/create-retrait.dto';
import { UpdateRetraitDto } from './dto/update-retrait.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class RetraitService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prismaClient.retrait.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.retrait.findUnique({ where: { id } });
  }
  create(createRetraitDto: CreateRetraitDto) {
    const RetaritWithId = {
      id: this.uuid,
      ...createRetraitDto,
    };
    return this.prismaClient.retrait.create({ data: RetaritWithId });
  }
  update(id: string, updateRetraitDto: UpdateRetraitDto) {
    return this.prismaClient.retrait.update({
      where: { id },
      data: updateRetraitDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.retrait.delete({ where: { id } });
  }
}
