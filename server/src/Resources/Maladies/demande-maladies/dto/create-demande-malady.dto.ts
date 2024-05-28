export class CreateDemandeMaladyDto {
  id: string;
  description: string;
  personelId: string;
  files: Array<Express.Multer.File>;
}
