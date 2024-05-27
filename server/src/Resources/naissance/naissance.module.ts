import { Module } from '@nestjs/common';
import { NaissanceController } from './naissance.controller';
import { NaissanceService } from './naissance.service';

@Module({
  controllers: [NaissanceController],
  providers: [NaissanceService],
})
export class NaissanceModule {}
