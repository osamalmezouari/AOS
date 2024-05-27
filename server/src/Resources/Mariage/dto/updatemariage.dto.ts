import { PartialType } from '@nestjs/mapped-types';
import { CreatemariageDto } from './createmariage.dto';

export class UpdatemariageDto extends PartialType(CreatemariageDto) {}
