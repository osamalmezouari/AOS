import { Injectable } from '@nestjs/common';
import { CreateDotationDto } from './dto/create-dotation.dto';
import { UpdateDotationDto } from './dto/update-dotation.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class DotationService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.dotation.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.dotation.findUnique({ where: { id } });
  }
  create(createDotationDto: CreateDotationDto) {
    const dotationWithId = {
      id: this.uuid,
      ...createDotationDto,
    };
    return this.prismaClient.dotation.create({
      data: dotationWithId,
    });
  }
  update(id: string, updateDotationDto: UpdateDotationDto) {
    return this.prismaClient.dotation.update({
      where: { id },
      data: updateDotationDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.dotation.delete({
      where: { id },
    });
  }
}
