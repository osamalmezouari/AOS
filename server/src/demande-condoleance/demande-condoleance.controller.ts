import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DemandeCondoleanceService } from './demande-condoleance.service';
import { CreateDemandeCondoleanceDto } from './dto/create-demande-condoleance.dto';
import { UpdateDemandeCondoleanceDto } from './dto/update-demande-condoleance.dto';

@Controller('demande-condoleance')
export class DemandeCondoleanceController {
  constructor(
    private readonly demandeCondoleanceService: DemandeCondoleanceService,
  ) {}

  @Post()
  create(@Body() createDemandeCondoleanceDto: CreateDemandeCondoleanceDto) {
    return this.demandeCondoleanceService.create(createDemandeCondoleanceDto);
  }

  @Get()
  findAll() {
    return this.demandeCondoleanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeCondoleanceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDemandeCondoleanceDto: UpdateDemandeCondoleanceDto,
  ) {
    return this.demandeCondoleanceService.update(
      +id,
      updateDemandeCondoleanceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeCondoleanceService.remove(+id);
  }
}
