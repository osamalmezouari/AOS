import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExcursionService } from './excursion.service';
import { CreateExcursionDto } from './dto/create-excursion.dto';
import { UpdateExcursionDto } from './dto/update-excursion.dto';

@Controller('excursion')
export class ExcursionController {
  constructor(private readonly excursionService: ExcursionService) {}

  @Post()
  create(@Body() createExcursionDto: CreateExcursionDto) {
    return this.excursionService.create(createExcursionDto);
  }

  @Get()
  findAll() {
    return this.excursionService.findAll();
  }

  @Get('excursionDispo')
  excursionDispo() {
    return this.excursionService.excursionDispo();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excursionService.findOne(id);
  }

  //@Patch(':id')
  //update(
  //@Param('id') id: string,
  //@Body() updateExcursionDto: UpdateExcursionDto,
  //) {
  //  return this.excursionService.update(id, updateExcursionDto);
  //}

  //@Delete(':id')
  //remove(@Param('id') id: string) {
  //return this.excursionService.remove(id);
  //}
}
