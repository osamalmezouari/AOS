import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZooService } from './zoo.service';
import { CreateZooDto } from './dto/create-zoo.dto';
import { UpdateZooDto } from './dto/update-zoo.dto';

@Controller('demande-zoo')
export class ZooController {
  constructor(private readonly zooService: ZooService) {}

  @Post()
  create(@Body() createZooDto: CreateZooDto) {
    return this.zooService.create(createZooDto);
  }

  @Get()
  findAll() {
    return this.zooService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zooService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZooDto: UpdateZooDto) {
    return this.zooService.update(id, updateZooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zooService.remove(id);
  }
}
