import { Module } from '@nestjs/common';
import { PersonelService } from './personel.service';
import { PersonelController } from './personel.controller';

@Module({
  providers: [PersonelService],
  controllers: [PersonelController]
})
export class PersonelModule {}
