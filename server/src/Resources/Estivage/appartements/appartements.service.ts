import { Injectable } from '@nestjs/common';
import { CreateAppartementDto } from './dto/create-appartement.dto';
import { UpdateAppartementDto } from './dto/update-appartement.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppartementsService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prismaClient.appartement.findMany({
      include: {
        centre: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaClient.appartement.findUnique({ where: { id } });
  }

  create(createAppartementDto: CreateAppartementDto) {
    const appartementWithId = {
      id: uuidv4(),
      ...createAppartementDto,
    };
    return this.prismaClient.appartement.create({
      data: appartementWithId,
    });
  }

  update(id: string, updateAppartementDto: UpdateAppartementDto) {
    return this.prismaClient.appartement.update({
      where: { id },
      data: updateAppartementDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.appartement.delete({ where: { id } });
  }
}
