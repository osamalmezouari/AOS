import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VillesService } from './villes.service';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';

@Controller('viles')
export class VillesController {
  constructor(private readonly villesService: VillesService) {}

  @Get()
  findAll() {
    return this.villesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.villesService.findOne(id);
  }
  @Post()
  create(@Body() createVilleDto: CreateVilleDto) {
    return this.villesService.create(createVilleDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVilleDto: UpdateVilleDto) {
    return this.villesService.update(id, updateVilleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.villesService.remove(id);
  }
}
