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
import { DemandeCreditModule } from './demande-credit/demande-credit.module';
import { DemandePelerinageModule } from './demande-pelerinage/demande-pelerinage.module';
import { RetraitModule } from './retrait/retrait.module';
import { DemandeMaladiesModule } from './demande-maladies/demande-maladies.module';
import { DemandeLangModule } from './demande-lang/demande-lang.module';
import { ZooModule } from './zoo/zoo.module';
import { DemandeExcursionModule } from './demande-excursion/demande-excursion.module';
import { CentresLinguistiqueModule } from './demande-lang/centres-linguistique/centres-linguistique.module';
import { DetailsExcursionModule } from './demande-excursion/details-excursion/details-excursion.module';
import { ExcursionModule } from './demande-excursion/excursion/excursion.module';
import { DemandeCondoleanceModule } from './demande-condoleance/demande-condoleance.module';
import { TypeCondoleanceModule } from './demande-condoleance/type-condoleance/type-condoleance.module';

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
    DemandeCreditModule,
    DemandePelerinageModule,
    RetraitModule,
    DemandeMaladiesModule,
    DemandeLangModule,
    ZooModule,
    DemandeExcursionModule,
    CentresLinguistiqueModule,
    DetailsExcursionModule,
    ExcursionModule,
    DemandeCondoleanceModule,
    TypeCondoleanceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
