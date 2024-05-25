export class CreateInscriptionDto {
  email: string;
  password: string;
  file?: Express.Multer.File;
}
