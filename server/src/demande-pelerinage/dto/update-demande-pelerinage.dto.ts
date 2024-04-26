import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandePelerinageDto } from './create-demande-pelerinage.dto';

export class UpdateDemandePelerinageDto extends PartialType(CreateDemandePelerinageDto) {}
