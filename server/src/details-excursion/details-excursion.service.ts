import { Injectable } from '@nestjs/common';
import { CreateDetailsExcursionDto } from './dto/create-details-excursion.dto';
import { UpdateDetailsExcursionDto } from './dto/update-details-excursion.dto';

@Injectable()
export class DetailsExcursionService {
  create(createDetailsExcursionDto: CreateDetailsExcursionDto) {
    return 'This action adds a new detailsExcursion';
  }

  findAll() {
    return `This action returns all detailsExcursion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailsExcursion`;
  }

  update(id: number, updateDetailsExcursionDto: UpdateDetailsExcursionDto) {
    return `This action updates a #${id} detailsExcursion`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailsExcursion`;
  }
}
