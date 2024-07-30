import { Module } from '@nestjs/common';
import { HandicapeController } from './handicape.controller';
import { HandicapeService } from './handicape.service';

@Module({
  controllers: [HandicapeController],
  providers: [HandicapeService],
})
export class HandicapeModule {}
