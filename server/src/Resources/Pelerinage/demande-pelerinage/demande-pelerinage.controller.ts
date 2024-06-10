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
import { DemandePelerinageService } from './demande-pelerinage.service';
import { CreateDemandePelerinageDto } from './dto/create-demande-pelerinage.dto';
import { UpdateDemandePelerinageDto } from './dto/update-demande-pelerinage.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('demande-pelerinage')
export class DemandePelerinageController {
  constructor(
    private readonly demandePelerinageService: DemandePelerinageService,
  ) {}

  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @Body() createDemandePelerinageDto: CreateDemandePelerinageDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    createDemandePelerinageDto.files = files;
    return this.demandePelerinageService.create(createDemandePelerinageDto);
  }

  @Get()
  findAll() {
    return this.demandePelerinageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandePelerinageService.findOne(id);
  }
  @Patch(':id')
  @UseInterceptors(AnyFilesInterceptor())
  update(
    @Param('id') id: string,
    @Body() updatePelerinageDto: UpdateDemandePelerinageDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    updatePelerinageDto.files = files;
    return this.demandePelerinageService.update(id, updatePelerinageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandePelerinageService.remove(id);
  }
}
