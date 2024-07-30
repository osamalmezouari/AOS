import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { EnfantsService } from './enfants.service';
import { CreateEnfants } from './dto/CreateEnfants.dto';
import { UpdateEnfants } from './dto/UpdateEnfants.dto';

@Controller('enfants')
export class EnfantsController {
  constructor(private readonly enfantsService: EnfantsService) {}

  @Get()
  findAll() {
    return this.enfantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfantsService.findOne(id);
  }
  @Post()
  create(@Body() createEnfants: CreateEnfants) {
    return this.enfantsService.create(createEnfants);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnfants: UpdateEnfants) {
    return this.enfantsService.update(id, updateEnfants);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfantsService.remove(id);
  }
}
