import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateInscriptionDto } from './dto/createinscreption.dto';
import { UpdateInscriptionDto } from './dto/updateinscreption.dto';
import { InscriptionService } from './inscreption.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('inscriptions')
export class InscriptionController {
  constructor(private readonly inscriptionService: InscriptionService) {}

  @Get()
  async findAll() {
    return this.inscriptionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.inscriptionService.findOne(id);
  }

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createInscriptionDto: CreateInscriptionDto,
  ) {
    createInscriptionDto.file = file;
    return await this.inscriptionService.create(createInscriptionDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInscriptionDto: UpdateInscriptionDto,
  ) {
    return this.inscriptionService.update(id, updateInscriptionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.inscriptionService.remove(id);
  }
}
