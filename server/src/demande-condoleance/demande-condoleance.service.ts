import { Injectable } from '@nestjs/common';
import { CreateDemandeCondoleanceDto } from './dto/create-demande-condoleance.dto';
import { UpdateDemandeCondoleanceDto } from './dto/update-demande-condoleance.dto';

@Injectable()
export class DemandeCondoleanceService {
  create(createDemandeCondoleanceDto: CreateDemandeCondoleanceDto) {
    return 'This action adds a new demandeCondoleance';
  }

  findAll() {
    return `This action returns all demandeCondoleance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandeCondoleance`;
  }

  update(id: number, updateDemandeCondoleanceDto: UpdateDemandeCondoleanceDto) {
    return `This action updates a #${id} demandeCondoleance`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandeCondoleance`;
  }
}
