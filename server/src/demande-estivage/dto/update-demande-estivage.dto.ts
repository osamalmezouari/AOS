import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandeEstivageDto } from './create-demande-estivage.dto';

export class UpdateDemandeEstivageDto extends PartialType(
  CreateDemandeEstivageDto,
) {}
