import { Injectable } from '@nestjs/common';
import { CreateDemandeCondoleanceDto } from './dto/create-demande-condoleance.dto';
import { UpdateDemandeCondoleanceDto } from './dto/update-demande-condoleance.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class DemandeCondoleanceService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {
    console.log(this.uuid);
  }
  findAll() {
    return this.prismaClient.demandeCondoleance.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demandeCondoleance.findUnique({ where: { id } });
  }

  create(createCondoleanceDto: CreateDemandeCondoleanceDto) {
    const demandeWithId = {
      id: this.uuid,
      ...createCondoleanceDto,
    };
    return this.prismaClient.demandeCondoleance.create({ data: demandeWithId });
  }

  update(id: string, updateDemandeCondoleanceDto: UpdateDemandeCondoleanceDto) {
    return this.prismaClient.demandeCondoleance.update({
      where: { id },
      data: updateDemandeCondoleanceDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demandeCondoleance.delete({ where: { id } });
  }
}
