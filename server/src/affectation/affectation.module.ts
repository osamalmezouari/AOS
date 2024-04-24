import { Module } from '@nestjs/common';
import { AffectationService } from './affectation.service';
import { AffectationController } from './affectation.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AffectationService],
  controllers: [AffectationController],
})
export class AffectationModule {}
