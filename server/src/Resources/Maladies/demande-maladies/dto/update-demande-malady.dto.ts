import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandeMaladyDto } from './create-demande-malady.dto';

export class UpdateDemandeMaladyDto extends PartialType(
  CreateDemandeMaladyDto,
) {}
