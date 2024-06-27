import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SousActiviteService } from './sous-activite.service';
import { SousActivite } from '@prisma/client';
import { UpdateSousActiviteDto } from './dto/UpdateSousActivite.dto';
import { CreateSousActiviteDto } from './dto/CreateSousActivite.dto';
import { AdminUpdateDto } from './dto/AdminUpdate.dto';

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

  @Get('Admin/State')
  async AdminDashboardState() {
    return this.sousActiviteService.AdminDashboardState();
  }

  @Get('singlesousActivitie/:id/:sousActivitieId')
  async PersonelStateforSingleSousActivitie(
    @Param('id') id: string,
    @Param('sousActivitieId') sousActivitieId: string,
  ) {
    return this.sousActiviteService.PersonelStateforSingleSousActivitie(
      id,
      sousActivitieId,
    );
  }
  @Get('AdminfetchSignledemande/:demandeId/:sousActivitieId')
  async AdminfetchSignledemande(
    @Param('sousActivitieId') SousActivitieId: string,
    @Param('demandeId') demandeId: string,
  ) {
    return this.sousActiviteService.AdminfetchSignledemande(
      SousActivitieId,
      demandeId,
    );
  }

  @Post()
  async create(@Body() createSousActiviteDto: CreateSousActiviteDto) {
    return this.sousActiviteService.create(createSousActiviteDto);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSousActiviteDto: UpdateSousActiviteDto,
  ): Promise<SousActivite> {
    return this.sousActiviteService.update(id, updateSousActiviteDto);
  }

  @Patch('AdminUpdate/:personelId/:demandeId/:sousActivitieId')
  async AdminUpdate(
    @Param('personelId') personelId: string,
    @Param('demandeId') demandeId: string,
    @Param('sousActivitieId') sousActivitieId: string,
    @Body() adminUpdateDto?: AdminUpdateDto,
  ) {
    return this.sousActiviteService.AdminUpdate(
      personelId,
      demandeId,
      sousActivitieId,
      adminUpdateDto,
    );
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sousActiviteService.delete(id);
  }
}
