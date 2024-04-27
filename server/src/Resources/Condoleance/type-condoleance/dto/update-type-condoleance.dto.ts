import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeCondoleanceDto } from './create-type-condoleance.dto';

export class UpdateTypeCondoleanceDto extends PartialType(
  CreateTypeCondoleanceDto,
) {}
