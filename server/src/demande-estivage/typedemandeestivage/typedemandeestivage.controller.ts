import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypedemandeestivageService } from './typedemandeestivage.service';
import { CreateTypedemandeestivageDto } from './dto/create-typedemandeestivage.dto';
import { UpdateTypedemandeestivageDto } from './dto/update-typedemandeestivage.dto';

@Controller('typedemandeestivage')
export class TypedemandeestivageController {
  constructor(
    private readonly typedemandeestivageService: TypedemandeestivageService,
  ) {}

  @Get()
  findAll() {
    return this.typedemandeestivageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typedemandeestivageService.findOne(id);
  }

  @Post()
  create(@Body() createTypedemandeestivageDto: CreateTypedemandeestivageDto) {
    return this.typedemandeestivageService.create(createTypedemandeestivageDto);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypedemandeestivageDto: UpdateTypedemandeestivageDto,
  ) {
    return this.typedemandeestivageService.update(
      id,
      updateTypedemandeestivageDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typedemandeestivageService.remove(id);
  }
}
