import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfants } from './CreateEnfants.dto';

export class UpdateEnfants extends PartialType(CreateEnfants) {}
