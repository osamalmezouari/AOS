import { PartialType } from '@nestjs/mapped-types';
import { CreateSousActiviteDto } from './CreateSousActivite.dto';

export class UpdateSousActiviteDto extends PartialType(CreateSousActiviteDto) {}
