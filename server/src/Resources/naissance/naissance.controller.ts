import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { NaissanceService } from './naissance.service';
import { CreateNaissanceDto } from './Dto/createnaissance.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('naissance')
export class NaissanceController {
  constructor(private readonly naissanceService: NaissanceService) {}

  @Get()
  findAll() {
    return this.naissanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.naissanceService.findOne(id);
  }

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createnaissance: CreateNaissanceDto,
  ) {
    createnaissance.files = files;
    return this.naissanceService.create(createnaissance);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.naissanceService.remove(id);
  }
}
