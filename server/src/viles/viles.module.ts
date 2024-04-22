import { Module } from '@nestjs/common';
import { VilesService } from './viles.service';

@Module({
  providers: [VilesService],
})
export class VilesModule {}
