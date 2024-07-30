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
import { SportService } from './sport.service';
import { CreateSportDto } from './dto/CreateSport.dto';
import UpdateSportDto from './dto/UpdateSport.dto';

@Controller('sport')
export class SportController {
  constructor(private readonly sportService: SportService) {}

  @Get()
  findAll() {
    return this.sportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportService.findOne(id);
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @Body() createSportDto: CreateSportDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    createSportDto.files = files;
    return this.sportService.create(createSportDto);
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatesport: UpdateSportDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    updatesport.files = files;
    return this.sportService.update(id, updatesport);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportService.remove(id);
  }
}
