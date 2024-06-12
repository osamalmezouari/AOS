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
import { DemandeEstivageService } from './demande-estivage.service';
import { CreateDemandeEstivageDto } from './dto/create-demande-estivage.dto';
import { UpdateDemandeEstivageDto } from './dto/update-demande-estivage.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('demande-estivage')
export class DemandeEstivageController {
  constructor(
    private readonly demandeEstivageService: DemandeEstivageService,
  ) {}

  @Get()
  findAll() {
    return this.demandeEstivageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeEstivageService.findOne(id);
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @Body() createDemandeEstivageDto: CreateDemandeEstivageDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    createDemandeEstivageDto.files = files;
    return this.demandeEstivageService.create(createDemandeEstivageDto);
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDemandeEstivageDto: UpdateDemandeEstivageDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    updateDemandeEstivageDto.files = files;
    return this.demandeEstivageService.update(id, updateDemandeEstivageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeEstivageService.remove(id);
  }
}
