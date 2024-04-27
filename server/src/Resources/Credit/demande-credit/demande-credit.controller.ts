import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DemandeCreditService } from './demande-credit.service';
import { CreateDemandeCreditDto } from './dto/create-demande-credit.dto';
import { UpdateDemandeCreditDto } from './dto/update-demande-credit.dto';

@Controller('demande-credit')
export class DemandeCreditController {
  constructor(private readonly demandeCreditService: DemandeCreditService) {}

  @Post()
  create(@Body() createDemandeCreditDto: CreateDemandeCreditDto) {
    return this.demandeCreditService.create(createDemandeCreditDto);
  }

  @Get()
  findAll() {
    return this.demandeCreditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeCreditService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDemandeCreditDto: UpdateDemandeCreditDto,
  ) {
    return this.demandeCreditService.update(id, updateDemandeCreditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeCreditService.remove(id);
  }
}
