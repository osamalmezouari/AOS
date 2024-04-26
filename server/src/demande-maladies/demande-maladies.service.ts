import { Injectable } from '@nestjs/common';
import { CreateDemandeMaladyDto } from './dto/create-demande-malady.dto';
import { UpdateDemandeMaladyDto } from './dto/update-demande-malady.dto';

@Injectable()
export class DemandeMaladiesService {
  create(createDemandeMaladyDto: CreateDemandeMaladyDto) {
    return 'This action adds a new demandeMalady';
  }

  findAll() {
    return `This action returns all demandeMaladies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandeMalady`;
  }

  update(id: number, updateDemandeMaladyDto: UpdateDemandeMaladyDto) {
    return `This action updates a #${id} demandeMalady`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandeMalady`;
  }
}
