import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { MariageService } from './mariage.service';
import { CreatemariageDto } from './dto/createmariage.dto';
import { UpdatemariageDto } from './dto/updatemariage.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { mariage } from '@prisma/client';

@Controller('Mariage')
export class MariageController {
  constructor(private readonly mariageService: MariageService) {}

  @Get()
  findAll() {
    return this.mariageService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<mariage> {
    return this.mariageService.findOne(id);
  }
  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createmariage: CreatemariageDto,
  ) {
    createmariage.files = files;
    return this.mariageService.create(createmariage);
  }

  @Put(':id')
  @UseInterceptors(AnyFilesInterceptor())
  update(
    @Param('id') id: string,
    @Body() updatemariageDto: UpdatemariageDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    updatemariageDto.files = files;
    return this.mariageService.update(id, updatemariageDto);
  }

  @Delete()
  delete(@Param('id') id: string) {
    return this.mariageService.remove(id);
  }
}
