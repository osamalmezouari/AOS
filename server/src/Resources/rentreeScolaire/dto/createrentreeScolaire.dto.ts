import { Transform } from 'class-transformer';

export class CreaterentreeScolaireDto {
  date: string;
  files: Array<Express.Multer.File>;
  personelId: string;
  annee: number;
}
