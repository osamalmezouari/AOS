import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AffectationService } from './affectation.service';
import { Affectation } from '@prisma/client';
import { CreateAffectationDto } from './dto/createAffectation.dto';

@Controller('affectation')
export class AffectationController {
  constructor(private readonly affectationService: AffectationService) {}

  @Get()
  findAll(): Promise<Affectation[]> {
    return this.affectationService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Affectation> {
    return this.affectationService.findOne(id);
  }
  @Post()
  async create(
    @Body() createAffectationDto: CreateAffectationDto,
  ): Promise<Affectation> {
    return this.affectationService.create(createAffectationDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() affectation: Affectation,
  ): Promise<Affectation> {
    return this.affectationService.update(id, affectation);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Affectation> {
    return this.affectationService.delete(id);
  }
}
