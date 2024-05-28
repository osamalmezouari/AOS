export class CreateDemandeCondoleanceDto {
  description: string;
  files: Array<Express.Multer.File>;
  personelId: string;
  selectedDeceased: string;
}
