import { Inject, Injectable } from '@nestjs/common';
import { CreateTypeCondoleanceDto } from './dto/create-type-condoleance.dto';
import { UpdateTypeCondoleanceDto } from './dto/update-type-condoleance.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class TypeCondoleanceService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.typeCondoleance.findMany();
  }
  findOne(id: string) {
    return this.prismaClient.typeCondoleance.findUnique({ where: { id } });
  }
  create(createTypeCondoleanceDto: CreateTypeCondoleanceDto) {
    const TypeWithId = {
      id: this.uuid.Getuuid(),
      ...createTypeCondoleanceDto,
    };
    return this.prismaClient.typeCondoleance.create({ data: TypeWithId });
  }
  update(id: string, updateTypeCondoleanceDto: UpdateTypeCondoleanceDto) {
    return this.prismaClient.typeCondoleance.update({
      where: { id },
      data: updateTypeCondoleanceDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demandeCondoleance.delete({ where: { id } });
  }
}
