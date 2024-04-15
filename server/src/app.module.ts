import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AffectationModule } from './affectation/affectation.module';
import { DemandeModule } from './demande/demande.module';
import { PersonelModule } from './personel/personel.module';
import { SousActivitesModule } from './sous-activites/sous-activites.module';

@Module({
  imports: [AffectationModule, DemandeModule, PersonelModule, SousActivitesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
