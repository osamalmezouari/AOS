import { Module } from '@nestjs/common';
import { DemandeEstivageService } from './demande-estivage.service';
import { DemandeEstivageController } from './demande-estivage.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DemandeEstivageController],
  providers: [DemandeEstivageService],
})
export class DemandeEstivageModule {}
