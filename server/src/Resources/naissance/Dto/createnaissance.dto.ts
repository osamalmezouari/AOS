import { Transform, Type } from 'class-transformer';

export class CreateNaissanceDto {
  Date: string;
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  nombre: number;
  files: Array<Express.Multer.File>;
  personelId: string;
}
