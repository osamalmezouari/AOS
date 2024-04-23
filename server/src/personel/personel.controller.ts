import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {PersonelService} from "./personel.service";
import {Personel} from "@prisma/client";
import {UpdateActiviteDto} from "../activite/dto/UpdateActivite.dto";
import {UpdatepersonelDto} from "./dto/Updatepersonel.dto";

@Controller('personel')
export class PersonelController {
    constructor(
        private readonly personelService: PersonelService
    ) {
    }
    @Get()
    async findAll() {
        this.personelService
    }
    @Get(':id')
    async findOne(@Param('id') id : string): Promise<Personel> {
        return this.personelService.findOne(id)
    }
    @Post()
    create(@Body() personel: Personel) {
        this.personelService.create(personel)
    }
    @Put(':id')
    async update(@Param('id') id : string, @Body() updatepersonelDto: UpdatepersonelDto) : Promise<Personel> {
        return this.personelService.update(id, updatepersonelDto)
    }
    @Delete(':id')
    async delete(@Param('id') id : string): Promise<void> {
        await this.personelService.delete(id)
    }
}
