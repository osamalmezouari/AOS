import { Module } from '@nestjs/common';
import { AppartementsService } from './appartements.service';
import { AppartementsController } from './appartements.controller';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppartementsController],
  providers: [AppartementsService],
})
export class AppartementsModule {}
