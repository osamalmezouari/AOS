import { CreaterentreeScolaireDto } from './createrentreeScolaire.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdaterentreeScolaireDto extends PartialType(
  CreaterentreeScolaireDto,
) {}
