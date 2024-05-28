import { Module } from '@nestjs/common';
import { RentreeScolaireService } from './rentreeScolaire.service';
import { RentreescolaireController } from './rentreescolaire.controller';

@Module({
  controllers: [RentreescolaireController],
  providers: [RentreeScolaireService],
})
export class RentreeScolaireModule {}
