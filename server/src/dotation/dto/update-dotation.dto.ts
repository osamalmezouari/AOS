import { PartialType } from '@nestjs/mapped-types';
import { CreateDotationDto } from './create-dotation.dto';

export class UpdateDotationDto extends PartialType(CreateDotationDto) {}
