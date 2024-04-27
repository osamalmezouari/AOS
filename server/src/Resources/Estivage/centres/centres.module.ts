import { Module } from '@nestjs/common';
import { CentresService } from './centres.service';
import { CentresController } from './centres.controller';

@Module({
  imports: [],
  controllers: [CentresController],
  providers: [CentresService],
})
export class CentresModule {}
