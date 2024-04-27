import { Module } from '@nestjs/common';
import { DemandeEstivageService } from './demande-estivage.service';
import { DemandeEstivageController } from './demande-estivage.controller';

@Module({
  imports: [],
  controllers: [DemandeEstivageController],
  providers: [DemandeEstivageService],
})
export class DemandeEstivageModule {}
