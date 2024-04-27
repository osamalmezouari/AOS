import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeCondoleanceService } from './type-condoleance.service';
import { CreateTypeCondoleanceDto } from './dto/create-type-condoleance.dto';
import { UpdateTypeCondoleanceDto } from './dto/update-type-condoleance.dto';

@Controller('type-condoleance')
export class TypeCondoleanceController {
  constructor(
    private readonly typeCondoleanceService: TypeCondoleanceService,
  ) {}

  @Get()
  findAll() {
    return this.typeCondoleanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeCondoleanceService.findOne(id);
  }
  @Post()
  create(@Body() createTypeCondoleanceDto: CreateTypeCondoleanceDto) {
    return this.typeCondoleanceService.create(createTypeCondoleanceDto);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeCondoleanceDto: UpdateTypeCondoleanceDto,
  ) {
    return this.typeCondoleanceService.update(id, updateTypeCondoleanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeCondoleanceService.remove(id);
  }
}
