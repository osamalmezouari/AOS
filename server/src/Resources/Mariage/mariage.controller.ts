import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { MariageService } from './mariage.service';
import { CreatemariageDto } from './dto/createmariage.dto';
import { UpdatemariageDto } from './dto/updatemariage.dto';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('Mariage')
export class MariageController {
  constructor(private readonly mariageService: MariageService) {}

  @Get()
  findAll() {
    return this.mariageService.findAll();
  }
  @Get('id')
  findOne(@Param('id') id: string) {
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

  @Patch()
  update(@Param() id: string, @Body() updatemariageDto: UpdatemariageDto) {
    return this.mariageService.update(id, updatemariageDto);
  }

  @Delete()
  delete(@Param() id: string) {
    return this.mariageService.remove(id);
  }
}
