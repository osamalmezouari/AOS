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
import { DemandeLangService } from './demande-lang.service';
import { CreateDemandeLangDto } from './dto/create-demande-lang.dto';
import { UpdateDemandeLangDto } from './dto/update-demande-lang.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('demande-lang')
export class DemandeLangController {
  constructor(private readonly demandeLangService: DemandeLangService) {}

  @Get()
  findAll() {
    return this.demandeLangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeLangService.findOne(id);
  }
  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @Body() createDemandeLangDto: CreateDemandeLangDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    createDemandeLangDto.files = files;
    return this.demandeLangService.create(createDemandeLangDto);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDemandeLangDto: UpdateDemandeLangDto,
  ) {
    return this.demandeLangService.update(id, updateDemandeLangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeLangService.remove(id);
  }
}
