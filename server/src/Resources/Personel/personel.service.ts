import { Injectable } from '@nestjs/common';
import { Personel, PrismaClient } from '@prisma/client';
import { CreatepersonelDto } from './dto/Createpersonel.dto';
import { UpdatepersonelDto } from './dto/Updatepersonel.dto';
import { UuidService } from '../../Helpers/UUID/uuid.service';

@Injectable()
export class PersonelService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}
  findAll(): Promise<Personel[]> {
    return this.prismaClient.personel
      .findMany
      //     {
      //   include: {
      //     demandeLang: true,
      //     retrait : true,
      //     Zoo:true
      //     demamdeMaladies: true,
      //     demandeCredit: true,
      //     demandePelerinage: true,
      //     demandeEstivage: true,
      //   },
      // }
      ();
  }
  findOne(id: string): Promise<Personel> {
    return this.prismaClient.personel.findUnique({ where: { id: id } });
  }
  create(createpersonelDto: CreatepersonelDto) {
    const PersonelwhithId = {
      id: this.uuid,
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
