import { PartialType } from '@nestjs/mapped-types';
import { CreatepersonelDto } from './Createpersonel.dto';

export class UpdatepersonelDto extends PartialType(CreatepersonelDto) {}
