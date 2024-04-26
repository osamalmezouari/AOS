import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActiviteService } from './activite.service';
import { Activitie } from '@prisma/client';
import { UpdateActiviteDto } from './dto/UpdateActivite.dto';
import { CreateActiviteDto } from './dto/CreateActivite.dto';

@Controller('activite')
export class ActiviteController {
  constructor(private readonly activiteService: ActiviteService) {}
  @Get()
  findAll() {
    return this.activiteService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Activitie> {
    return this.activiteService.findOne(id);
  }
  @Post()
  create(@Body() createActiviteDto: CreateActiviteDto) {
    return this.activiteService.create(createActiviteDto);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateActiviteDto: UpdateActiviteDto,
  ): Promise<Activitie> {
    return this.activiteService.update(id, updateActiviteDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.activiteService.delete(id);
  }
}
