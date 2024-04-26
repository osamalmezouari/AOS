import { Injectable } from '@nestjs/common';
import { CreateZooDto } from './dto/create-zoo.dto';
import { UpdateZooDto } from './dto/update-zoo.dto';

@Injectable()
export class ZooService {
  create(createZooDto: CreateZooDto) {
    return 'This action adds a new zoo';
  }

  findAll() {
    return `This action returns all zoo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zoo`;
  }

  update(id: number, updateZooDto: UpdateZooDto) {
    return `This action updates a #${id} zoo`;
  }

  remove(id: number) {
    return `This action removes a #${id} zoo`;
  }
}
