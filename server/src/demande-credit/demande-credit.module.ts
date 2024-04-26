import { Module } from '@nestjs/common';
import { DemandeCreditService } from './demande-credit.service';
import { DemandeCreditController } from './demande-credit.controller';

@Module({
  controllers: [DemandeCreditController],
  providers: [DemandeCreditService],
})
export class DemandeCreditModule {}
