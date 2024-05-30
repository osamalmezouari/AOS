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
  async excursionDispo(): Promise<any[]> {
    try {
      const now = new Date().getTime(); // Get current date and time in milliseconds
      const excursions = await this.prisma.excursion.findMany({
        where: {
          Date: {
            gt: now, // Compare with current date and time
          },
        },
      });

      // Convert BigInt values to strings
      const serializedExcursions = excursions.map(excursion => ({
        ...excursion,
        Date: excursion.Date.toString(),
      }));

      return serializedExcursions;
    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      throw new Error('Failed to fetch excursions');
    }
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
