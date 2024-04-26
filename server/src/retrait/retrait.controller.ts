import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RetraitService } from './retrait.service';
import { CreateRetraitDto } from './dto/create-retrait.dto';
import { UpdateRetraitDto } from './dto/update-retrait.dto';

@Controller('retrait')
export class RetraitController {
  constructor(private readonly retraitService: RetraitService) {}

  @Post()
  create(@Body() createRetraitDto: CreateRetraitDto) {
    return this.retraitService.create(createRetraitDto);
  }

  @Get()
  findAll() {
    return this.retraitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retraitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRetraitDto: UpdateRetraitDto) {
    return this.retraitService.update(+id, updateRetraitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retraitService.remove(+id);
  }
}
