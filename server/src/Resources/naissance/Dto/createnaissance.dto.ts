import { Transform, Type } from 'class-transformer';

export class CreateNaissanceDto {
  date: string;
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  numberOfChildren: number;
  files: Array<Express.Multer.File>;
  personelId: string;
}
