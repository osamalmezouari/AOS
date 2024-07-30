import { PartialType } from '@nestjs/mapped-types';
import CreateHandicapeDTO from './CreateHandicape.dto';

export default class UpdateHandicapeDto extends PartialType(
  CreateHandicapeDTO,
) {}
