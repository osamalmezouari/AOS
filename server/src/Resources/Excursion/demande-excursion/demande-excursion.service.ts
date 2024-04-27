import { Injectable } from '@nestjs/common';
import { CreateDemandeExcursionDto } from './dto/create-demande-excursion.dto';
import { UpdateDemandeExcursionDto } from './dto/update-demande-excursion.dto';

@Injectable()
export class DemandeExcursionService {
  create(createDemandeExcursionDto: CreateDemandeExcursionDto) {
    return 'This action adds a new demandeExcursion';
  }

  findAll() {
    return `This action returns all demandeExcursion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandeExcursion`;
  }

  update(id: number, updateDemandeExcursionDto: UpdateDemandeExcursionDto) {
    return `This action updates a #${id} demandeExcursion`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandeExcursion`;
  }
}
