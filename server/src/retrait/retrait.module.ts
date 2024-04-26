import { Module } from '@nestjs/common';
import { RetraitService } from './retrait.service';
import { RetraitController } from './retrait.controller';

@Module({
  controllers: [RetraitController],
  providers: [RetraitService],
})
export class RetraitModule {}
