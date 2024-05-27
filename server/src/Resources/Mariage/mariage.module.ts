import { Module } from '@nestjs/common';
import { MariageService } from './mariage.service';
import { MariageController } from './mariage.controller';

@Module({
  providers: [MariageService],
  controllers: [MariageController],
})
export class MariageModule {}
