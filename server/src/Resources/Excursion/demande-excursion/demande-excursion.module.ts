import { Module } from '@nestjs/common';
import { DemandeExcursionService } from './demande-excursion.service';
import { DemandeExcursionController } from './demande-excursion.controller';

@Module({
  controllers: [DemandeExcursionController],
  providers: [DemandeExcursionService],
})
export class DemandeExcursionModule {}
