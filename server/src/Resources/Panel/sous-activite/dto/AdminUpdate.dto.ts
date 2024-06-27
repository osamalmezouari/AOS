import { Transform } from 'class-transformer';

export class AdminUpdateDto {
  observation?: string;
  @Transform(({ value }) => parseInt(value, 10)) montant?: number;
  Status?: string;
  appartementId?: string;
  montantAloue?: number;
}
