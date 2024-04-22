import Centre from '../../demandeEstivage/centeres/model/centre.model';

export class UpdateVileDto {
  id?: string;
  vileAr?: string;
  vileFr?: string;
  centres?: Centre[];
}
