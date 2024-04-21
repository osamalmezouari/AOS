import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemandeModule } from './demandeEstivage/demande.module';
import { PersonelModule } from './personel/personel.module';
import { ActiviteController } from './activite/activite.controller';
import { ActiviteService } from './activite/activite.service';
import { ActiviteModule } from './activite/activite.module';
import { PiecesModule } from './pieces/pieces.module';
import { SousActiviteModule } from './sous-activite/sous-activite.module';
import { AffectationController } from './affectation/affectation.controller';
import { AffectationService } from './affectation/affectation.service';
import { AffectationModule } from './affectation/affectation.module';

@Module({
  imports: [
    AffectationModule,
    DemandeModule,
    PersonelModule,
    ActiviteModule,
    PiecesModule,
    SousActiviteModule,
  ],
  controllers: [AppController, ActiviteController, AffectationController],
  providers: [AppService, ActiviteService, AffectationService],
})
export class AppModule {}
