import { Module } from '@nestjs/common';
import { ExcursionService } from './excursion.service';
import { ExcursionController } from './excursion.controller';

@Module({
  controllers: [ExcursionController],
  providers: [ExcursionService],
})
export class ExcursionModule {}
