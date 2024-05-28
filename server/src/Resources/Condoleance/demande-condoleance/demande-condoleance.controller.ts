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
import { DemandeCondoleanceService } from './demande-condoleance.service';
import { CreateDemandeCondoleanceDto } from './dto/create-demande-condoleance.dto';
import { UpdateDemandeCondoleanceDto } from './dto/update-demande-condoleance.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('demande-condoleance')
export class DemandeCondoleanceController {
  constructor(
    private readonly demandeCondoleanceService: DemandeCondoleanceService,
  ) {}

  @Get()
  findAll() {
    return this.demandeCondoleanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandeCondoleanceService.findOne(id);
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Post()
  create(
    @Body() createDemandeCondoleanceDto: CreateDemandeCondoleanceDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    createDemandeCondoleanceDto.files = files;
    return this.demandeCondoleanceService.create(createDemandeCondoleanceDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDemandeCondoleanceDto: UpdateDemandeCondoleanceDto,
  ) {
    return this.demandeCondoleanceService.update(
      id,
      updateDemandeCondoleanceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandeCondoleanceService.remove(id);
  }
}
