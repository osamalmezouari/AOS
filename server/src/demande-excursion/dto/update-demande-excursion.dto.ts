import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandeExcursionDto } from './create-demande-excursion.dto';

export class UpdateDemandeExcursionDto extends PartialType(CreateDemandeExcursionDto) {}
