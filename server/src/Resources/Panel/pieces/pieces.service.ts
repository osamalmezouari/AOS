import { Injectable } from '@nestjs/common';
import { CreatePieceDto } from './dto/create-piece.dto';
import { UpdatePieceDto } from './dto/update-piece.dto';
import { PrismaClient } from '@prisma/client';
import { UuidService } from '../../../Helpers/UUID/uuid.service';

@Injectable()
export class PiecesService {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly uuid: UuidService,
  ) {}

  findAll() {
    return this.prismaClient.pieces.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.pieces.findUnique({ where: { id } });
  }

  create(createPieceDto: CreatePieceDto) {
    const PieceWithId = {
      id: this.uuid,
      ...createPieceDto,
    };
    return this.prismaClient.pieces.create({ data: PieceWithId });
  }

  update(id: string, updatePieceDto: UpdatePieceDto) {
    return this.prismaClient.pieces.update({
      where: { id },
      data: updatePieceDto,
    });
  }

  remove(id: string) {
    return this.prismaClient.pieces.delete({ where: { id } });
  }
}
