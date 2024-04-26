import { Injectable } from '@nestjs/common';
import { CreateRetraitDto } from './dto/create-retrait.dto';
import { UpdateRetraitDto } from './dto/update-retrait.dto';

@Injectable()
export class RetraitService {
  create(createRetraitDto: CreateRetraitDto) {
    return 'This action adds a new retrait';
  }

  findAll() {
    return `This action returns all retrait`;
  }

  findOne(id: number) {
    return `This action returns a #${id} retrait`;
  }

  update(id: number, updateRetraitDto: UpdateRetraitDto) {
    return `This action updates a #${id} retrait`;
  }

  remove(id: number) {
    return `This action removes a #${id} retrait`;
  }
}
