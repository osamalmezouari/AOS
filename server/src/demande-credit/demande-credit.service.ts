import { Injectable } from '@nestjs/common';
import { CreateDemandeCreditDto } from './dto/create-demande-credit.dto';
import { UpdateDemandeCreditDto } from './dto/update-demande-credit.dto';

@Injectable()
export class DemandeCreditService {
  create(createDemandeCreditDto: CreateDemandeCreditDto) {
    return 'This action adds a new demandeCredit';
  }

  findAll() {
    return `This action returns all demandeCredit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandeCredit`;
  }

  update(id: number, updateDemandeCreditDto: UpdateDemandeCreditDto) {
    return `This action updates a #${id} demandeCredit`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandeCredit`;
  }
}
