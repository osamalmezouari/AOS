import { PartialType } from '@nestjs/mapped-types';
import { CreateSportDto } from './CreateSport.dto';

export default class UpdateSportDto extends PartialType(CreateSportDto) {}
