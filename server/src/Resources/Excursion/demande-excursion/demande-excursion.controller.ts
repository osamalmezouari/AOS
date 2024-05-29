import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { DemandeExcursionService } from './demande-excursion.service';
import { CreateDemandeExcursionDto } from './dto/create-demande-excursion.dto';
import { UpdateDemandeExcursionDto } from './dto/update-demande-excursion.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('demande-excursion')
export class DemandeExcursionController {
  constructor(
    private readonly demandeExcursionService: DemandeExcursionService,
  ) {}

  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @Body() createDemandeExcursionDto: CreateDemandeExcursionDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    createDemandeExcursionDto.files = files;
    return this.demandeExcursionService.create(createDemandeExcursionDto);
  }

  @Get()
  findAll() {
    return this.demandeExcursionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeExcursionService.findOne(id);
  }

  //@Patch(':id')
  //update(
  //@Param('id') id: string,
  // @Body() updateDemandeExcursionDto: UpdateDemandeExcursionDto,
  //) {
  //return this.demandeExcursionService.update(id, updateDemandeExcursionDto);
  //}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeExcursionService.remove(id);
  }
}
