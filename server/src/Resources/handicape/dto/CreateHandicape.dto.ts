export default class CreateHandicapeDTO {
  personelId: string;
  enfant: string;
  description: string;
  files: Express.Multer.File[];
}
