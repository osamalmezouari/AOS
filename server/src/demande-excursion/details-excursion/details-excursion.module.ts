import { Module } from '@nestjs/common';
import { DetailsExcursionService } from './details-excursion.service';
import { DetailsExcursionController } from './details-excursion.controller';

@Module({
  controllers: [DetailsExcursionController],
  providers: [DetailsExcursionService],
})
export class DetailsExcursionModule {}
