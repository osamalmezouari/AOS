export class CreateRetraitDto {
  id: string;
  date: string;
  files: Array<Express.Multer.File>;
  personelId: string;
}
