import { Transform } from 'class-transformer';

export class CreateDemandeCreditDto {
  id: string;
  @Transform(({ value }) => parseInt(value, 10))
  mantantCredit: number;
  description: string;
  personelId: string;
  files: Array<Express.Multer.File>;
}
