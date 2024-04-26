import { PartialType } from '@nestjs/mapped-types';
import { CreateRetraitDto } from './create-retrait.dto';

export class UpdateRetraitDto extends PartialType(CreateRetraitDto) {}
