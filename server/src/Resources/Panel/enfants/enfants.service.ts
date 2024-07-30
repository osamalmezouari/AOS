import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { UpdateEnfants } from './dto/UpdateEnfants.dto';
import { CreateEnfants } from './dto/CreateEnfants.dto';

@Injectable()
export class EnfantsService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.enfants.findMany();
  }
  findOne(id: string) {
    return this.prismaClient.enfants.findUnique({ where: { id } });
  }
  create(createEnfants: CreateEnfants) {
    const EnfantsWithID = {
      id: this.uuid.Getuuid(),
      ...createEnfants,
    };
    return this.prismaClient.enfants.create({ data: EnfantsWithID });
  }
  update(id: string, updateEnfants: UpdateEnfants) {
    return this.prismaClient.enfants.update({
      where: { id },
      data: updateEnfants,
    });
  }

  remove(id: string) {
    return this.prismaClient.enfants.delete({ where: { id } });
  }
}
