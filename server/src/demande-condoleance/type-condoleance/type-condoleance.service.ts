import { Injectable } from '@nestjs/common';
import { CreateTypeCondoleanceDto } from './dto/create-type-condoleance.dto';
import { UpdateTypeCondoleanceDto } from './dto/update-type-condoleance.dto';

@Injectable()
export class TypeCondoleanceService {
  create(createTypeCondoleanceDto: CreateTypeCondoleanceDto) {
    return 'This action adds a new typeCondoleance';
  }

  findAll() {
    return `This action returns all typeCondoleance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeCondoleance`;
  }

  update(id: number, updateTypeCondoleanceDto: UpdateTypeCondoleanceDto) {
    return `This action updates a #${id} typeCondoleance`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeCondoleance`;
  }
}
