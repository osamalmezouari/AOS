import { Transform } from 'class-transformer';

export class CreateSportDto {
  @Transform(({ value }) => Number(value))
  montant: number;
  enfant: string;
  personelId: string;
  @Transform(({ value }) => Number(value))
  aneee: number;
  files: Express.Multer.File[];
}
