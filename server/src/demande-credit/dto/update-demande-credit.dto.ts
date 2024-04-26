import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandeCreditDto } from './create-demande-credit.dto';

export class UpdateDemandeCreditDto extends PartialType(CreateDemandeCreditDto) {}
