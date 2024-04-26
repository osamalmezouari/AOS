import { PartialType } from '@nestjs/mapped-types';
import { CreateActiviteDto } from './CreateActivite.dto';

export class UpdateActiviteDto extends PartialType(CreateActiviteDto) {}
