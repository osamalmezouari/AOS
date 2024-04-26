import { Module } from '@nestjs/common';
import { CentresService } from './centres.service';
import { CentresController } from './centres.controller';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CentresController],
  providers: [CentresService],
})
export class CentresModule {}
