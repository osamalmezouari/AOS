import { Transform } from 'class-transformer';

export class CreateDemandePelerinageDto {
  id: string;

  @Transform(({ value }) => Number(value))
  annee: number;
  personelId: string;
  sousActiviteId: string;
  files: Array<Express.Multer.File>;
}
