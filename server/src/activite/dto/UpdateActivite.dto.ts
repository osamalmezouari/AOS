import {DemandeEstivage} from "@prisma/client";

export class UpdateActiviteDto {
  matricule?: number;
  nom_fr?: string;
  nom_ar?: string;
  prenom_ar?: string;
  prenom_fr?: string;
  naissance?: bigint;
  email?: string;
  echelle?: number;
  adherant?: boolean;
  isAdmin?: boolean;
  AffectationId?: string;
  demandeEstivage?: DemandeEstivage[];
}
