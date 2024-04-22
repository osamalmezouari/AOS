import DemandeEstivage from '../../demandeEstivage/Model/demandeEstivage.model';

export class UpdateSousActivite {
  id?: string;
  nomAr?: string;
  nomFr?: string;
  descriptionAr?: string;
  descriptionFr?: string;
  piecesId?: string;
  activiteId?: string;
  dotationId?: string;
  demandeEsstivage?: DemandeEstivage[];
}
