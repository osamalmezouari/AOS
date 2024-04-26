import { Module } from '@nestjs/common';
import { DotationService } from './dotation.service';
import { DotationController } from './dotation.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DotationController],
  providers: [DotationService],
})
export class DotationModule {}
