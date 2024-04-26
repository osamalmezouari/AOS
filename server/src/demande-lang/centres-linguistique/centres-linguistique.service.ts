import { Injectable } from '@nestjs/common';
import { CreateCentresLinguistiqueDto } from './dto/create-centres-linguistique.dto';
import { UpdateCentresLinguistiqueDto } from './dto/update-centres-linguistique.dto';

@Injectable()
export class CentresLinguistiqueService {
  create(createCentresLinguistiqueDto: CreateCentresLinguistiqueDto) {
    return 'This action adds a new centresLinguistique';
  }

  findAll() {
    return `This action returns all centresLinguistique`;
  }

  findOne(id: number) {
    return `This action returns a #${id} centresLinguistique`;
  }

  update(
    id: number,
    updateCentresLinguistiqueDto: UpdateCentresLinguistiqueDto,
  ) {
    return `This action updates a #${id} centresLinguistique`;
  }

  remove(id: number) {
    return `This action removes a #${id} centresLinguistique`;
  }
}
