import { Injectable } from '@nestjs/common';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from 'src/Helpers/UUID/uuid.service';
import { getDate } from 'date-fns';

@Injectable()
export class ExcursionService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return `This action returns all excursion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} excursion`;
  }
  excursionDispo() {
    return this.prisma.excursion.findMany({
      where: {
        Date: {
          gt: 1716964893803,
        },
      },
    });
  }
  //create(createExcursionDto: CreateExcursionDto) {
  //return 'This action adds a new excursion';
  //}
  //update(id: number, UpdateExcursionDto: UpdateExcursionDto) {
  //return `This action updates a #${id} excursion`;
  //}

  //remove(id: number) {
  //return `This action removes a #${id} excursion`;
  //}
}
