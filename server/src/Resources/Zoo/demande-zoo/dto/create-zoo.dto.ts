import { Transform } from 'class-transformer';

export class CreateZooDto {
  id: string;
  date: string;
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  adulte: number;
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  enfant: number;
  personelId: string;
  sousActiviteId: string;
  description: string;
}
