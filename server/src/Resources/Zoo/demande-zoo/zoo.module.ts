import { Module } from '@nestjs/common';
import { ZooService } from './zoo.service';
import { ZooController } from './zoo.controller';

@Module({
  controllers: [ZooController],
  providers: [ZooService],
})
export class ZooModule {}
