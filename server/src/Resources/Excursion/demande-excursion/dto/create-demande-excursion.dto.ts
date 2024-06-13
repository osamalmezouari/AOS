export class CreateDemandeExcursionDto {
  files: Array<Express.Multer.File>;
  personelId: string;
  ExcursionId: string;
  sousActiviteId: string;
}
