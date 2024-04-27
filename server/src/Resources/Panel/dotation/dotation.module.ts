import { Module } from '@nestjs/common';
import { DotationService } from './dotation.service';
import { DotationController } from './dotation.controller';

@Module({
  imports: [],
  controllers: [DotationController],
  providers: [DotationService],
})
export class DotationModule {}
