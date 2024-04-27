import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DotationService } from './dotation.service';
import { CreateDotationDto } from './dto/create-dotation.dto';
import { UpdateDotationDto } from './dto/update-dotation.dto';

@Controller('dotation')
export class DotationController {
  constructor(private readonly dotationService: DotationService) {}

  @Post()
  create(@Body() createDotationDto: CreateDotationDto) {
    return this.dotationService.create(createDotationDto);
  }

  @Get()
  findAll() {
    return this.dotationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dotationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDotationDto: UpdateDotationDto,
  ) {
    return this.dotationService.update(id, updateDotationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dotationService.remove(id);
  }
}
