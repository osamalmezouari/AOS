import { PartialType } from '@nestjs/mapped-types';
import { CreateNaissanceDto } from './createnaissance.dto';

export class UpdatenaissanceDto extends PartialType(CreateNaissanceDto) {}
