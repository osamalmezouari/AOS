import { Injectable } from '@nestjs/common';
import { Personel, PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { CreatepersonelDto } from './dto/Createpersonel.dto';
import { UpdatepersonelDto } from './dto/Updatepersonel.dto';

@Injectable()
export class PersonelService {
  constructor(private readonly prismaClient: PrismaClient) {}
  findAll(): Promise<Personel[]> {
    return this.prismaClient.personel.findMany();
  }
  findOne(id: string): Promise<Personel> {
    return this.prismaClient.personel.findUnique({ where: { id: id } });
  }
  create(createpersonelDto: CreatepersonelDto) {
    const PersonelwhithId = {
      id: uuidv4(),
      ...createpersonelDto,
    };
    return this.prismaClient.personel.create({ data: PersonelwhithId });
  }
  update(id: string, updatepersonelDto: UpdatepersonelDto): Promise<Personel> {
    return this.prismaClient.personel.update({
      data: updatepersonelDto,
      where: { id: id },
    });
  }
  delete(id: string): Promise<Personel> {
    return this.prismaClient.personel.delete({ where: { id: id } });
  }
}
