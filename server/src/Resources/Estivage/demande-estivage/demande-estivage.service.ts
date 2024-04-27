import { Injectable } from '@nestjs/common';
import { CreateDemandeEstivageDto } from './dto/create-demande-estivage.dto';
import { UpdateDemandeEstivageDto } from './dto/update-demande-estivage.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class DemandeEstivageService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll() {
    return this.prismaClient.demandeEstivage.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.demandeEstivage.findUnique({
      where: { id },
      include: {
        personel: true,
        sousActivite: true,
        centre: true,
      },
    });
  }
  create(createDemandeEstivageDto: CreateDemandeEstivageDto) {
    const demandeWithId = {
      id: this.uuid,
      ...createDemandeEstivageDto,
    };
    return this.prismaClient.demandeEstivage.create({ data: demandeWithId });
  }
  update(id: string, updateDemandeEstivageDto: UpdateDemandeEstivageDto) {
    return this.prismaClient.demandeEstivage.update({
      where: { id },
      data: updateDemandeEstivageDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.demandeEstivage.delete({ where: { id } });
  }
}
