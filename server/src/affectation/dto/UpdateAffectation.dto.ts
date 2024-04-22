import { Personel } from '../../personel/Model/personel.model';

export class UpdateAffectationDto {
  id?: string;
  structureAr?: string;
  StructureFr?: string;
  abrviation?: string;
  TypeDepartement?: string;
  personel?: Personel[];
}
