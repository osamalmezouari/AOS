import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailsExcursionService } from './details-excursion.service';
import { CreateDetailsExcursionDto } from './dto/create-details-excursion.dto';
import { UpdateDetailsExcursionDto } from './dto/update-details-excursion.dto';

@Controller('details-excursion')
export class DetailsExcursionController {
  constructor(private readonly detailsExcursionService: DetailsExcursionService) {}

  @Post()
  create(@Body() createDetailsExcursionDto: CreateDetailsExcursionDto) {
    return this.detailsExcursionService.create(createDetailsExcursionDto);
  }

  @Get()
  findAll() {
    return this.detailsExcursionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailsExcursionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailsExcursionDto: UpdateDetailsExcursionDto) {
    return this.detailsExcursionService.update(+id, updateDetailsExcursionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailsExcursionService.remove(+id);
  }
}
