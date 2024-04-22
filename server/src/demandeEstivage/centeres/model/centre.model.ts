import DemandeEstivage from '../../Model/demandeEstivage.model';
import { Appartement } from '../../appartements/model/appartement.model';

export default class Centre {
  id: string;
  centreAr: string;
  centreFr: string;
  demandeEstivage: DemandeEstivage[];
  vileId: string;
  TypeEstivageId: string;
  appartements: Appartement[];
}
