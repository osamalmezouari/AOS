import { Module } from '@nestjs/common';
import { DemandePelerinageService } from './demande-pelerinage.service';
import { DemandePelerinageController } from './demande-pelerinage.controller';

@Module({
  controllers: [DemandePelerinageController],
  providers: [DemandePelerinageService],
})
export class DemandePelerinageModule {}
