import { Transform } from 'class-transformer';

export class CreaterentreeScolaireDto {
  date: string;
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  numberOfChildren: number;
  files: Array<Express.Multer.File>;
  personelId: string;
}
