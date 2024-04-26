import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandeCondoleanceDto } from './create-demande-condoleance.dto';

export class UpdateDemandeCondoleanceDto extends PartialType(
  CreateDemandeCondoleanceDto,
) {}
