import { Prisma } from '@prisma/client';

export class UpdateSousActiviteDto {
  nomAr?: string;
  nomFr?: string;
  descriptionAr?: string;
  descriptionFr?: string;
  activite?: string;
  dotation?: string;
}
