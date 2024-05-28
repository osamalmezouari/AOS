import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { RentreeScolaireService } from './rentreeScolaire.service';
import { CreaterentreeScolaireDto } from './dto/createrentreeScolaire.dto';

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentreeScolaireService.remove(id);
  }
}
