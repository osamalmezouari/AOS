import { Injectable } from '@nestjs/common';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from 'src/Helpers/UUID/uuid.service';
import { v4 as uuid } from 'uuid';
@Injectable()
export class ExcursionService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prisma.excursion.findMany({
      include: {
        endVile: true,
        startVile: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.excursion.findUnique({
      where: { id },
    });
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
      const serializedExcursions = excursions.map((excursion) => ({
        ...excursion,
        Date: excursion.Date.toString(),
      }));

      return serializedExcursions;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch excursions');
    }
  }

  create(createExcursionDto: CreateExcursionDto) {
    return this.prisma.excursion.create({
      data: {
        id: uuid(),
        ...createExcursionDto,
      },
    });
  }
  update(id: number, UpdateExcursionDto: UpdateExcursionDto) {
    return `This action updates a #${id} excursion`;
  }
}
