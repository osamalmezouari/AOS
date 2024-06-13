import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateZooDto } from './dto/create-zoo.dto';
import { UpdateZooDto } from './dto/update-zoo.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';
import { getYear } from 'date-fns';

@Injectable()
export class ZooService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prismaClient.zoo.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.zoo.findUnique({ where: { id } });
  }
  async create(createZooDto: CreateZooDto) {
    const currentyear = getYear(new Date());
    const matchingPersonel = await this.prismaClient.personel.findUnique({
      where: { id: createZooDto.personelId },
    });
    if (!matchingPersonel) {
      throw new HttpException('Personel not found', HttpStatus.NOT_FOUND);
    }

    const CheckAccepted = await this.prismaClient.retrait.findFirst({
      where: { personelId: createZooDto.personelId, Status: 'Approuvées' },
    });
    const Checkontraiter = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createZooDto.personelId,
        Status: 'En traitement',
      },
    });
    const Checkpasencorevue = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createZooDto.personelId,
        Status: null,
      },
    });
    const CheckDocnecess = await this.prismaClient.retrait.findFirst({
      where: {
        personelId: createZooDto.personelId,
        Status: 'Documents requis',
      },
    });
    if (Checkpasencorevue) {
      throw new HttpException(
        "Vous avez déjà une demande n est pas n'a pas encore été examinée par l'administrateur.",
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckDocnecess) {
      throw new HttpException(
        'Vous avez déjà une demande avec des documents nécessaires ou pas valide. Vous pouvez modifier les documents dans votre profil.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (CheckAccepted) {
      throw new HttpException(
        'Ce demande est unique dans la vie, vous avez déjà pris ce retrait.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (Checkontraiter) {
      throw new HttpException(
        'Vous avez déjà une demande en cours de traitement. Vous pouvez modifier les documents.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const ZooWithID = {
      ...createZooDto,
      id: this.uuid.Getuuid(),
      sousActiviteId: '11',
      personelId: createZooDto.personelId,
    };
    return this.prismaClient.zoo.create({ data: ZooWithID });
  }
  update(id: string, updateZooDto: UpdateZooDto) {
    return this.prismaClient.zoo.update({
      where: { id },
      data: {
        ...updateZooDto,
        Status: null,
      },
    });
  }

  remove(id: string) {
    return this.prismaClient.zoo.delete({
      where: { id },
    });
  }
}
