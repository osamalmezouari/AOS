import { Module } from '@nestjs/common';
import { InscriptionService } from './inscreption.service';
import { InscriptionController } from './inscreption.controller';

@Module({
  providers: [InscriptionService],
  controllers: [InscriptionController],
})
export class InscreptionModule {}
