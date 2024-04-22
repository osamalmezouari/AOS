import { DemandeEstivage } from '@prisma/client';
import { Appartement } from '../../appartements/model/appartement.model';

export class UpdateCentreDto {
  id?: string;
  centreAr?: string;
  centreFr?: string;
  demandeEstivage?: DemandeEstivage[];
  vileId?: string;
  TypeEstivageId?: string;
  appartements?: Appartement[];
}
