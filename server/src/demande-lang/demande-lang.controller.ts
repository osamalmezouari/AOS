import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandeLangService } from './demande-lang.service';
import { CreateDemandeLangDto } from './dto/create-demande-lang.dto';
import { UpdateDemandeLangDto } from './dto/update-demande-lang.dto';

@Controller('demande-lang')
export class DemandeLangController {
  constructor(private readonly demandeLangService: DemandeLangService) {}

  @Post()
  create(@Body() createDemandeLangDto: CreateDemandeLangDto) {
    return this.demandeLangService.create(createDemandeLangDto);
  }

  @Get()
  findAll() {
    return this.demandeLangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeLangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandeLangDto: UpdateDemandeLangDto) {
    return this.demandeLangService.update(+id, updateDemandeLangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeLangService.remove(+id);
  }
}
