import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandeMaladiesService } from './demande-maladies.service';
import { CreateDemandeMaladyDto } from './dto/create-demande-malady.dto';
import { UpdateDemandeMaladyDto } from './dto/update-demande-malady.dto';

@Controller('demande-maladies')
export class DemandeMaladiesController {
  constructor(private readonly demandeMaladiesService: DemandeMaladiesService) {}

  @Post()
  create(@Body() createDemandeMaladyDto: CreateDemandeMaladyDto) {
    return this.demandeMaladiesService.create(createDemandeMaladyDto);
  }

  @Get()
  findAll() {
    return this.demandeMaladiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeMaladiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandeMaladyDto: UpdateDemandeMaladyDto) {
    return this.demandeMaladiesService.update(+id, updateDemandeMaladyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeMaladiesService.remove(+id);
  }
}
