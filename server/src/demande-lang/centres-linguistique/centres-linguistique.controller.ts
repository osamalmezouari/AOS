import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CentresLinguistiqueService } from './centres-linguistique.service';
import { CreateCentresLinguistiqueDto } from './dto/create-centres-linguistique.dto';
import { UpdateCentresLinguistiqueDto } from './dto/update-centres-linguistique.dto';

@Controller('centres-linguistique')
export class CentresLinguistiqueController {
  constructor(
    private readonly centresLinguistiqueService: CentresLinguistiqueService,
  ) {}

  @Post()
  create(@Body() createCentresLinguistiqueDto: CreateCentresLinguistiqueDto) {
    return this.centresLinguistiqueService.create(createCentresLinguistiqueDto);
  }

  @Get()
  findAll() {
    return this.centresLinguistiqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centresLinguistiqueService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCentresLinguistiqueDto: UpdateCentresLinguistiqueDto,
  ) {
    return this.centresLinguistiqueService.update(
      +id,
      updateCentresLinguistiqueDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centresLinguistiqueService.remove(+id);
  }
}
