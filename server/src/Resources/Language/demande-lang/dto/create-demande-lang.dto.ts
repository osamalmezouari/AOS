import { Transform } from 'class-transformer';

export class CreateDemandeLangDto {
  personelId: string;
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  montant: number;
  enfant: string;
  periode: string;
  files: Array<Express.Multer.File>;
}
