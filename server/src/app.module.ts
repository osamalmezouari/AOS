import { Module } from '@nestjs/common';
import { ActiviteModule } from './Resources/Panel/activite/activite.module';
import { PiecesModule } from './Resources/Panel/pieces/pieces.module';
import { CentresModule } from './Resources/Estivage/centres/centres.module';
import { DemandeEstivageModule } from './Resources/Estivage/demande-estivage/demande-estivage.module';
import { VillesModule } from './Resources/Panel/villes/villes.module';
import { PersonelModule } from './Resources/Personel/personel.module';
import { AffectationModule } from './Resources/Panel/affectation/affectation.module';
import { AppartementsModule } from './Resources/Estivage/appartements/appartements.module';
import { SousActiviteModule } from './Resources/Panel/sous-activite/sous-activite.module';
import { DemandeCreditModule } from './Resources/Credit/demande-credit/demande-credit.module';
import { DemandePelerinageModule } from './Resources/Pelerinage/demande-pelerinage/demande-pelerinage.module';
import { RetraitModule } from './Resources/Retrait/demande-retrait/retrait.module';
import { DemandeMaladiesModule } from './Resources/Maladies/demande-maladies/demande-maladies.module';
import { DemandeLangModule } from './Resources/Language/demande-lang/demande-lang.module';
import { ZooModule } from './Resources/Zoo/demande-zoo/zoo.module';
import { DemandeExcursionModule } from './Resources/Excursion/demande-excursion/demande-excursion.module';
import { ExcursionModule } from './Resources/Excursion/excursion/excursion.module';
import { DemandeCondoleanceModule } from './Resources/Condoleance/demande-condoleance/demande-condoleance.module';
import { TypeCondoleanceModule } from './Resources/Condoleance/type-condoleance/type-condoleance.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UuidModule } from './Helpers/UUID/uuid.module';
import { InscreptionModule } from './Resources/inscreption/inscreption.module';
import { AuthModule } from './Resources/Auth/auth.module';
import { MariageModule } from './Resources/Mariage/mariage.module';
import { NaissanceModule } from './Resources/naissance/naissance.module';
import { RentreeScolaireModule } from './Resources/rentreeScolaire/rentreeScolaire.module';

@Module({
  imports: [
    ActiviteModule,
    PiecesModule,
    PersonelModule,
    VillesModule,
    DemandeEstivageModule,
    CentresModule,
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
    ExcursionModule,
    DemandeCondoleanceModule,
    TypeCondoleanceModule,
    PrismaModule,
    UuidModule,
    InscreptionModule,
    AuthModule,
    MariageModule,
    NaissanceModule,
    DemandePelerinageModule,
    RentreeScolaireModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
