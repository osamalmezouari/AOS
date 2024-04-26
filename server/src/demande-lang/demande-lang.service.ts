import { Injectable } from '@nestjs/common';
import { CreateDemandeLangDto } from './dto/create-demande-lang.dto';
import { UpdateDemandeLangDto } from './dto/update-demande-lang.dto';

@Injectable()
export class DemandeLangService {
  create(createDemandeLangDto: CreateDemandeLangDto) {
    return 'This action adds a new demandeLang';
  }

  findAll() {
    return `This action returns all demandeLang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandeLang`;
  }

  update(id: number, updateDemandeLangDto: UpdateDemandeLangDto) {
    return `This action updates a #${id} demandeLang`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandeLang`;
  }
}
