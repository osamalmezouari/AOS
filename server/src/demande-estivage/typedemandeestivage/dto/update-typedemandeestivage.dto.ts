import { PartialType } from '@nestjs/mapped-types';
import { CreateTypedemandeestivageDto } from './create-typedemandeestivage.dto';

export class UpdateTypedemandeestivageDto extends PartialType(
  CreateTypedemandeestivageDto,
) {}
