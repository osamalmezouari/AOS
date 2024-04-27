import { PartialType } from '@nestjs/mapped-types';
import { CreateCentresLinguistiqueDto } from './create-centres-linguistique.dto';

export class UpdateCentresLinguistiqueDto extends PartialType(
  CreateCentresLinguistiqueDto,
) {}
