import { Injectable } from '@nestjs/common';
import {Personel, PrismaClient} from "@prisma/client";
import {UpdatepersonelDto} from "./dto/Updatepersonel.dto";

@Injectable()
export class PersonelService {
    constructor(private readonly prismaClient: PrismaClient) {
    }
    findAll(): Promise<Personel[]> {
        return this.prismaClient.personel.findMany()
    }
    findOne(id: string): Promise<Personel> {
        return this.prismaClient.personel.findUnique({where: {id: id}});
    }
    create(data: Personel) {
        return this.prismaClient.personel.create({ data: data });
    }
    update(id: string, updatepersonelDto: UpdatepersonelDto): Promise<Personel> {
        return this.prismaClient.personel.update({ data: updatepersonelDto, where: {id: id}});
    }
    delete(id: string): Promise<Personel> {
         return this.prismaClient.personel.delete({where: {id: id}});
    }
}
