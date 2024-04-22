import DemandeEstivage from '../../demandeEstivage/Model/demandeEstivage.model';

export class Activite {
  id: number;
  matricule: number;
  nom_fr: string;
  nom_ar: string;
  prenom_ar: string;
  prenom_fr: string;
  naissance: number;
  email: string;
  echelle: number;
  adherant: boolean;
  isAdmin: boolean;
  AffectationId: string;
  demandeEstivage: DemandeEstivage[];
}
