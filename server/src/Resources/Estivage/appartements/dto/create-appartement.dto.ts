import { Transform } from 'class-transformer';

export class CreateAppartementDto {
  id: string;
  @Transform(({ value }) => parseInt(value, 10))
  numero: number;
  centreId: string;
}
