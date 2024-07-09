import { Transform } from 'class-transformer';

export class CreatepersonelDto {
  id: string;
  @Transform(({ value }) => parseInt(value, 10))
  matricule: number;
  nom_fr: string;
  nom_ar: string;
  prenom_ar: string;
  prenom_fr: string;
  password: string;
  naissance: string;
  email: string;
  @Transform(({ value }) => parseInt(value, 10))
  echelle: number;
  AffectationId: string;
}
