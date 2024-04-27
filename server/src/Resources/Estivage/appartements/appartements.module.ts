import { Module } from '@nestjs/common';
import { AppartementsService } from './appartements.service';
import { AppartementsController } from './appartements.controller';

@Module({
  imports: [],
  controllers: [AppartementsController],
  providers: [AppartementsService],
})
export class AppartementsModule {}
