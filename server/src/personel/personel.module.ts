import { Module } from '@nestjs/common';
import { PersonelService } from './personel.service';
import { PersonelController } from './personel.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PersonelService],
  controllers: [PersonelController],
})
export class PersonelModule {}
