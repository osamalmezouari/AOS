import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PersonelService } from './personel.service';
import { Personel } from '@prisma/client';
import { UpdatepersonelDto } from './dto/Updatepersonel.dto';
import { CreatepersonelDto } from './dto/Createpersonel.dto';

@Controller('personel')
export class PersonelController {
  constructor(private readonly personelService: PersonelService) {}
  @Get('AllDemandesWithDetails')
  async AllDemandesWithDetails() {
    return this.personelService.AllDemandesWithDetails();
  }
  @Get()
  async findAll() {
    return this.personelService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Personel> {
    return this.personelService.findOne(id);
  }

  @Get('DemandesWithDetails/:id')
  async PersonelDemandesWithDetails(@Param('id') id: string) {
    return this.personelService.PersonelDemandesWithDetails(id);
  }

  @Get('SingleSousActivitiesdemandesWithDetails/:id/:sousActivitieId')
  async SingleSousActivitiesdemandesWithDetails(
    @Param('id') id: string,
    @Param('sousActivitieId') sousActivitieId: string,
  ) {
    return this.personelService.SingleSousActivitiesdemandesWithDetails(
      id,
      sousActivitieId,
    );
  }
  @Get('AdminSingleSousActivitiesdemandesWithDetails/:sousActivitieId')
  async AdminSingleSousActivitiesdemandesWithDetails(
    @Param('sousActivitieId') sousActivitieId: string,
  ) {
    return this.personelService.AdminSingleSousActivitiesdemandesWithDetails(
      sousActivitieId,
    );
  }
  @Post()
  async create(@Body() createpersonelDto: CreatepersonelDto) {
    return this.personelService.create(createpersonelDto);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatepersonelDto: UpdatepersonelDto,
  ): Promise<Personel> {
    return this.personelService.update(id, updatepersonelDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.personelService.delete(id);
  }
}
