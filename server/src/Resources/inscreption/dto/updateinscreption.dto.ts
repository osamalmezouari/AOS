import { PartialType } from '@nestjs/mapped-types';
import { CreateInscriptionDto } from './createinscreption.dto';

export class UpdateInscriptionDto extends PartialType(CreateInscriptionDto) {}
