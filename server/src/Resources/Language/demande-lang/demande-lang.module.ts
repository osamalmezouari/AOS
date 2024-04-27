import { Module } from '@nestjs/common';
import { DemandeLangService } from './demande-lang.service';
import { DemandeLangController } from './demande-lang.controller';

@Module({
  controllers: [DemandeLangController],
  providers: [DemandeLangService],
})
export class DemandeLangModule {}
