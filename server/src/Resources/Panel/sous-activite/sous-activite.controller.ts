import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SousActiviteService } from './sous-activite.service';
import { SousActivite } from '@prisma/client';
import { UpdateSousActiviteDto } from './dto/UpdateSousActivite.dto';
import { CreateSousActiviteDto } from './dto/CreateSousActivite.dto';

@Controller('sous-activite')
export class SousActiviteController {
  constructor(private readonly sousActiviteService: SousActiviteService) {}
  @Get('')
  async NavBarBuilder() {
    return await this.sousActiviteService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<SousActivite> {
    return this.sousActiviteService.findOne(id);
  }
  @Get('Profile/State/:id')
  async PersonelDashboardState(@Param('id') id: string) {
    return this.sousActiviteService.PersonelDashboardState(id);
  }

  @Post()
  async create(@Body() createSousActiviteDto: CreateSousActiviteDto) {
    return this.sousActiviteService.create(createSousActiviteDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSousActiviteDto: UpdateSousActiviteDto,
  ): Promise<SousActivite> {
    return this.sousActiviteService.update(id, updateSousActiviteDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sousActiviteService.delete(id);
  }
}
