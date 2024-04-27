import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandeLangDto } from './create-demande-lang.dto';

export class UpdateDemandeLangDto extends PartialType(CreateDemandeLangDto) {}
