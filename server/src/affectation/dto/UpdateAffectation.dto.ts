import { PartialType } from '@nestjs/mapped-types';
import { CreateAffectationDto } from './createAffectation.dto';

export class UpdateAffectationDto extends PartialType(CreateAffectationDto) {}
