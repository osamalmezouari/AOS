import { Module } from '@nestjs/common';
import { DemandeMaladiesService } from './demande-maladies.service';
import { DemandeMaladiesController } from './demande-maladies.controller';

@Module({
  controllers: [DemandeMaladiesController],
  providers: [DemandeMaladiesService],
})
export class DemandeMaladiesModule {}
