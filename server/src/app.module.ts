import { Module } from '@nestjs/common';
import { ActiviteModule } from './activite/activite.module';
import { PiecesModule } from './pieces/pieces.module';
import { TypedemandeestivageModule } from './demande-estivage/typedemandeestivage/typedemandeestivage.module';
import { CentresModule } from './demande-estivage/centres/centres.module';
import { DemandeEstivageModule } from './demande-estivage/demande-estivage.module';
import { DotationModule } from './dotation/dotation.module';
import { VillesModule } from './villes/villes.module';
import { PersonelModule } from './personel/personel.module';
import { AffectationModule } from './affectation/affectation.module';
import { AppartementsModule } from './demande-estivage/appartements/appartements.module';
import { SousActiviteModule } from './sous-activite/sous-activite.module';

@Module({
  imports: [
    ActiviteModule,
    PiecesModule,
    PersonelModule,
    VillesModule,
    DotationModule,
    DemandeEstivageModule,
    CentresModule,
    TypedemandeestivageModule,
    AffectationModule,
    AppartementsModule,
    CentresModule,
    SousActiviteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
