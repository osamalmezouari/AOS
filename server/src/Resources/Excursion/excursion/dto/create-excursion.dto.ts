import { Transform } from 'class-transformer';

export class CreateExcursionDto {
  id: string;
  Description: string;
  Date: bigint;
  vileStartId: string;
  vileEndId: string;
  imgUrl: string;
  nom: string;
  @Transform(({ value }) => parseInt(value, 10))
  nombre: number;
  @Transform(({ value }) => parseInt(value, 10))
  montant: number;
}
