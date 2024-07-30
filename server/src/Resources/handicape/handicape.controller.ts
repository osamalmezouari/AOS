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
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import UpdateHandicapeDto from './dto/UpdateHandicape.dto';
import CreateHandicapeDTO from './dto/CreateHandicape.dto';
import { HandicapeService } from './handicape.service';

@Controller('demande-Handicape')
export class HandicapeController {
  constructor(private readonly demandeHandicapeService: HandicapeService) {}

  @Get()
  findAll() {
    return this.demandeHandicapeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeHandicapeService.findOne(id);
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @Body() createHandicape: CreateHandicapeDTO,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    createHandicape.files = files;
    return this.demandeHandicapeService.create(createHandicape);
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHandicape: UpdateHandicapeDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    updateHandicape.files = files;
    return this.demandeHandicapeService.update(id, updateHandicape);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeHandicapeService.remove(id);
  }
}
