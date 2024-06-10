import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Patch,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { RentreeScolaireService } from './rentreeScolaire.service';
import { CreaterentreeScolaireDto } from './dto/createrentreeScolaire.dto';
import { UpdaterentreeScolaireDto } from './dto/updaterentreeScolaire.dto';

@Controller('rentree-scolaire')
export class RentreescolaireController {
  constructor(
    private readonly rentreeScolaireService: RentreeScolaireService,
  ) {}

  @Get()
  findAll() {
    return this.rentreeScolaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentreeScolaireService.findOne(id);
  }

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createrentreeScolaireDto: CreaterentreeScolaireDto,
  ) {
    createrentreeScolaireDto.files = files;
    return this.rentreeScolaireService.create(createrentreeScolaireDto);
  }

  @Patch(':id')
  @UseInterceptors(AnyFilesInterceptor())
  async update(
    @Param('id') id: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() updaterentreeScolaire: UpdaterentreeScolaireDto,
  ) {
    updaterentreeScolaire.files = files;
    return this.rentreeScolaireService.update(id, updaterentreeScolaire);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentreeScolaireService.remove(id);
  }
}
