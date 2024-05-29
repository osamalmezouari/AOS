export class CreateDemandeEstivageDto {
  id: string;
  date_entre: string;
  date_sortie: string;
  centreId: string;
  personelId: string;
  description: string;
  sousActiviteId: string;
  files: Array<Express.Multer.File>;
  type: string;
}
