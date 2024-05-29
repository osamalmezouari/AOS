export class CreateDemandeExcursionDto {
  Date: string;
  files: Array<Express.Multer.File>;
  personelId: string;
  ExcursionId: string;
  sousActiviteId: string;
}
