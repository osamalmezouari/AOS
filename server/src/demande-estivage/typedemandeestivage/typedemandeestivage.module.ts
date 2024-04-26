import { Module } from '@nestjs/common';
import { TypedemandeestivageService } from './typedemandeestivage.service';
import { TypedemandeestivageController } from './typedemandeestivage.controller';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TypedemandeestivageController],
  providers: [TypedemandeestivageService],
})
export class TypedemandeestivageModule {}
