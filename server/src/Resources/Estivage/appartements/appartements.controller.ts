import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppartementsService } from './appartements.service';
import { CreateAppartementDto } from './dto/create-appartement.dto';
import { UpdateAppartementDto } from './dto/update-appartement.dto';

@Controller('appartements')
export class AppartementsController {
  constructor(private readonly appartementsService: AppartementsService) {}

  @Post()
  create(@Body() createAppartementDto: CreateAppartementDto) {
    return this.appartementsService.create(createAppartementDto);
  }

  @Get()
  findAll() {
    return this.appartementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appartementsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppartementDto: UpdateAppartementDto,
  ) {
    return this.appartementsService.update(id, updateAppartementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appartementsService.remove(id);
  }
}
