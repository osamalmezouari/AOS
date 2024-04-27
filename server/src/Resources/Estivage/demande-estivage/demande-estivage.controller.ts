import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DemandeEstivageService } from './demande-estivage.service';
import { CreateDemandeEstivageDto } from './dto/create-demande-estivage.dto';
import { UpdateDemandeEstivageDto } from './dto/update-demande-estivage.dto';

@Controller('demande-estivage')
export class DemandeEstivageController {
  constructor(
    private readonly demandeEstivageService: DemandeEstivageService,
  ) {}

  @Get()
  findAll() {
    return this.demandeEstivageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeEstivageService.findOne(id);
  }
  @Post()
  create(@Body() createDemandeEstivageDto: CreateDemandeEstivageDto) {
    return this.demandeEstivageService.create(createDemandeEstivageDto);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDemandeEstivageDto: UpdateDemandeEstivageDto,
  ) {
    return this.demandeEstivageService.update(id, updateDemandeEstivageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeEstivageService.remove(id);
  }
}
