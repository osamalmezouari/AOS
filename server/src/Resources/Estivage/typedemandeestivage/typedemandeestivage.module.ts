import { Module } from '@nestjs/common';
import { TypedemandeestivageService } from './typedemandeestivage.service';
import { TypedemandeestivageController } from './typedemandeestivage.controller';

@Module({
  imports: [],
  controllers: [TypedemandeestivageController],
  providers: [TypedemandeestivageService],
})
export class TypedemandeestivageModule {}
