import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { Express } from 'express';

export class CreateDemandeEstivageDto {
  @IsNotEmpty()
  @IsString()
  date_entre: string;

  @IsNotEmpty()
  @IsString()
  date_sortie: string;

  @IsNotEmpty()
  @IsString()
  centreId: string;

  @IsNotEmpty()
  @IsString()
  personelId: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  montant: number;

  @IsNotEmpty()
  @IsString()
  type: string;

  files: Express.Multer.File[];
}
