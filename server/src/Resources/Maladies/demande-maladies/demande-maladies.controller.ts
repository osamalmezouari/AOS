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
import { DemandeMaladiesService } from './demande-maladies.service';
import { CreateDemandeMaladyDto } from './dto/create-demande-malady.dto';
import { UpdateDemandeMaladyDto } from './dto/update-demande-malady.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('demande-maladies')
export class DemandeMaladiesController {
  constructor(
    private readonly demandeMaladiesService: DemandeMaladiesService,
  ) {}
  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @Body() createDemandeMaladyDto: CreateDemandeMaladyDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    createDemandeMaladyDto.files = files;
    return this.demandeMaladiesService.create(createDemandeMaladyDto);
  }

  @Get()
  findAll() {
    return this.demandeMaladiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeMaladiesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(AnyFilesInterceptor())
  update(
    @Param('id') id: string,
    @Body() updateDemandeMaladyDto: UpdateDemandeMaladyDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    updateDemandeMaladyDto.files = files;
    return this.demandeMaladiesService.update(id, updateDemandeMaladyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeMaladiesService.remove(id);
  }
}
