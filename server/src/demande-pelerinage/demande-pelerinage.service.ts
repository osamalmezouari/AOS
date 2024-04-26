import { Injectable } from '@nestjs/common';
import { CreateDemandePelerinageDto } from './dto/create-demande-pelerinage.dto';
import { UpdateDemandePelerinageDto } from './dto/update-demande-pelerinage.dto';

@Injectable()
export class DemandePelerinageService {
  create(createDemandePelerinageDto: CreateDemandePelerinageDto) {
    return 'This action adds a new demandePelerinage';
  }

  findAll() {
    return `This action returns all demandePelerinage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandePelerinage`;
  }

  update(id: number, updateDemandePelerinageDto: UpdateDemandePelerinageDto) {
    return `This action updates a #${id} demandePelerinage`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandePelerinage`;
  }
}
