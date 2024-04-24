import { Affectation, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateAffectationDto } from './dto/createAffectation.dto';

@Injectable()
export class AffectationService {
  constructor(private readonly prismaClient: PrismaClient) {}
  findAll(): Promise<Affectation[]> {
    return this.prismaClient.affectation.findMany();
  }
  findOne(id: string): Promise<Affectation> {
    return this.prismaClient.affectation.findUnique({ where: { id } });
  }
  async create(createAffectationDto: CreateAffectationDto) {
    const affectationWithId = {
      id: uuid(),
      ...createAffectationDto,
    };
    return this.prismaClient.affectation.create({ data: affectationWithId });
  }
  update(id: string, affectation: Affectation) {
    return this.prismaClient.affectation.update({
      where: { id: id },
      data: affectation,
    });
  }
  delete(id: string) {
    return this.prismaClient.affectation.delete({ where: { id: id } });
  }
}
