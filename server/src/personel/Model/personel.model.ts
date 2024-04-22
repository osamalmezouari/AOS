import DemandeEstivage from '../../demandeEstivage/Model/demandeEstivage.model';

export interface Personel {
  id: string;
  matricule: number;
  nom_fr: string;
  nom_ar: string;
  prenom_ar: string;
  prenom_fr: string;
  naissance: bigint;
  email: string;
  echelle: number;
  adherant: boolean;
  isAdmin: boolean;
  AffectationId: string;
  demandeEstivage: DemandeEstivage[];
}
