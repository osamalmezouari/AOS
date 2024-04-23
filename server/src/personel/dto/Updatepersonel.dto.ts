import {DemandeEstivage} from "@prisma/client";
import {PartialType} from "@nestjs/mapped-types";

import {Personel} from "@prisma/client";

export class UpdatepersonelDto {
  id?: string;
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
// type MyPartial<T> = {
//     [P in keyof T]?: T[P];
// };
//
// // Use MyPartial with PersonelDto
// export class UpdatepersonelDto implements MyPartial<Personel> {}
