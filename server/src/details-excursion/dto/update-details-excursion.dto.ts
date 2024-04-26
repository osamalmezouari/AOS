import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailsExcursionDto } from './create-details-excursion.dto';

export class UpdateDetailsExcursionDto extends PartialType(CreateDetailsExcursionDto) {}
