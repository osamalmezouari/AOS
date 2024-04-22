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
import { CenteresModule } from './demandeEstivage/centeres/centeres.module';
import { CenteresService } from './demandeEstivage/centeres/centeres.service';
import { CenteresController } from './demandeEstivage/centeres/centeres.controller';
import { VilesController } from './viles/viles.controller';
import { VilesModule } from './viles/viles.module';
import { AppartementsController } from './demandeEstivage/appartements/appartements.controller';
import { AppartementsService } from './demandeEstivage/appartements/appartements.service';
import { AppartementsModule } from './demandeEstivage/appartements/appartements.module';
import { TypedmdesstivageModule } from './demandeEstivage/typedmdesstivage/typedmdesstivage.module';

@Module({
  imports: [
    AffectationModule,
    DemandeModule,
    PersonelModule,
    ActiviteModule,
    PiecesModule,
    SousActiviteModule,
    CenteresModule,
    VilesModule,
    AppartementsModule,
    TypedmdesstivageModule,
  ],
  controllers: [
    AppController,
    ActiviteController,
    AffectationController,
    CenteresController,
    VilesController,
    AppartementsController,
  ],
  providers: [
    AppService,
    ActiviteService,
    AffectationService,
    CenteresService,
    AppartementsService,
  ],
})
export class AppModule {}
