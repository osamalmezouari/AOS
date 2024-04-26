import { Injectable } from '@nestjs/common';
import { CreatePieceDto } from './dto/create-piece.dto';
import { UpdatePieceDto } from './dto/update-piece.dto';
import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PiecesService {
  constructor(private readonly prismaClient: PrismaClient) {}

  findAll() {
    return this.prismaClient.pieces.findMany();
  }

  findOne(id: string) {
    return this.prismaClient.pieces.findUnique({ where: { id } });
  }

  create(createPieceDto: CreatePieceDto) {
    const PieceWithId = {
      ...createPieceDto,
      id: uuid(),
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
