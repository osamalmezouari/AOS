import { Module } from '@nestjs/common';
import { CentresLinguistiqueService } from './centres-linguistique.service';
import { CentresLinguistiqueController } from './centres-linguistique.controller';

@Module({
  controllers: [CentresLinguistiqueController],
  providers: [CentresLinguistiqueService],
})
export class CentresLinguistiqueModule {}
