-- CreateTable
CREATE TABLE `Personel` (
    `id` VARCHAR(191) NOT NULL,
    `matricule` INTEGER NOT NULL,
    `nom_fr` VARCHAR(191) NOT NULL,
    `nom_ar` VARCHAR(191) NOT NULL,
    `prenom_ar` VARCHAR(191) NOT NULL,
    `prenom_fr` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `naissance` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `echelle` INTEGER NOT NULL,
    `isAdmin` BOOLEAN NULL DEFAULT false,
    `AffectationId` VARCHAR(191) NOT NULL,
    `sutuiation_familialeId` VARCHAR(191) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL DEFAULT '1',

    UNIQUE INDEX `Personel_matricule_key`(`matricule`),
    UNIQUE INDEX `Personel_nom_fr_key`(`nom_fr`),
    UNIQUE INDEX `Personel_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sutuiation_familiale` (
    `id` VARCHAR(191) NOT NULL,
    `sutiation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enfants` (
    `id` VARCHAR(191) NOT NULL,
    `nom_ar` VARCHAR(191) NOT NULL,
    `nom_fr` VARCHAR(191) NOT NULL,
    `naissance` DATETIME(3) NOT NULL,
    `sexe` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `id` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Roles_role_key`(`role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rolesonsousactivities` (
    `roleId` VARCHAR(191) NOT NULL,
    `sousActivitieId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Rolesonsousactivities_sousActivitieId_roleId_key`(`sousActivitieId`, `roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Affectation` (
    `id` VARCHAR(191) NOT NULL,
    `structureAr` TEXT NOT NULL,
    `StructureFr` TEXT NOT NULL,
    `abrviation` VARCHAR(191) NOT NULL,
    `TypeStructure` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activitie` (
    `id` VARCHAR(191) NOT NULL,
    `nomAr` VARCHAR(191) NOT NULL,
    `nomFr` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Activitie_nomFr_nomAr_key`(`nomFr`, `nomAr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SousActivite` (
    `id` VARCHAR(191) NOT NULL,
    `nomAr` VARCHAR(191) NOT NULL,
    `nomFr` VARCHAR(191) NOT NULL,
    `descriptionAr` TEXT NOT NULL,
    `descriptionFr` TEXT NOT NULL,
    `imgUrl` TEXT NOT NULL,
    `activiteId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SousActivite_nomFr_nomAr_key`(`nomFr`, `nomAr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SousActivitiesOnPieces` (
    `sousActiviteId` VARCHAR(191) NOT NULL,
    `pieceId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`sousActiviteId`, `pieceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pieces` (
    `id` VARCHAR(191) NOT NULL,
    `nomAr` TEXT NOT NULL,
    `nomFr` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DemandeEstivage` (
    `id` VARCHAR(191) NOT NULL,
    `date_entre` VARCHAR(191) NOT NULL,
    `date_sortie` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `appartementId` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `montantAloue` INTEGER NULL,
    `type` VARCHAR(191) NOT NULL,
    `centreId` VARCHAR(191) NOT NULL DEFAULT '0',
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeSport` (
    `id` VARCHAR(191) NOT NULL,
    `montant` INTEGER NOT NULL,
    `enfant` VARCHAR(191) NOT NULL,
    `montantAlloue` INTEGER NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `annee` INTEGER NOT NULL,
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeHandicape` (
    `id` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `enfant` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Centre` (
    `id` VARCHAR(191) NOT NULL,
    `centreAr` TEXT NOT NULL,
    `centreFr` TEXT NOT NULL,
    `imgUrl` TEXT NOT NULL,
    `vileId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appartement` (
    `id` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `centreId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeCredit` (
    `id` VARCHAR(191) NOT NULL,
    `montant` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandePelerinage` (
    `id` VARCHAR(191) NOT NULL,
    `annee` INTEGER NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `Status` VARCHAR(191) NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `retrait` (
    `id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demamdeMaladies` (
    `id` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `Decription` TEXT NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeLang` (
    `id` VARCHAR(191) NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Status` VARCHAR(191) NULL,
    `periode` VARCHAR(191) NOT NULL,
    `enfant` VARCHAR(191) NOT NULL,
    `annee` INTEGER NOT NULL,
    `montant` INTEGER NOT NULL,
    `montantAlloue` INTEGER NULL,
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `parentId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeCondoleance` (
    `id` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `description` TEXT NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `typeCondoleanceId` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `typeCondoleance` (
    `id` VARCHAR(191) NOT NULL,
    `nomFr` VARCHAR(191) NOT NULL,
    `nomAr` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Zoo` (
    `id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `adulte` INTEGER NOT NULL,
    `enfant` INTEGER NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `description` VARCHAR(191) NOT NULL,
    `observation` VARCHAR(191) NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mariage` (
    `id` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Status` VARCHAR(191) NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `observation` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeExcursion` (
    `id` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,
    `ExcursionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vile` (
    `id` VARCHAR(191) NOT NULL,
    `vileAr` VARCHAR(191) NOT NULL,
    `vileFr` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Vile_vileAr_vileFr_key`(`vileAr`, `vileFr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Excursion` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `Description` TEXT NOT NULL,
    `imgUrl` TEXT NOT NULL,
    `Date` BIGINT NOT NULL,
    `montant` INTEGER NULL,
    `nombre` INTEGER NOT NULL,
    `vileStartId` VARCHAR(191) NOT NULL,
    `vileEndId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `naissance` (
    `id` VARCHAR(191) NOT NULL,
    `Date` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `nombre` INTEGER NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rentreeScolaire` (
    `id` VARCHAR(191) NOT NULL,
    `Date` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `nombre` INTEGER NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inscreption` (
    `id` VARCHAR(191) NOT NULL,
    `annee` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `personelId` VARCHAR(191) NOT NULL,
    `SousActivitieId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personel` ADD CONSTRAINT `Personel_AffectationId_fkey` FOREIGN KEY (`AffectationId`) REFERENCES `Affectation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personel` ADD CONSTRAINT `Personel_sutuiation_familialeId_fkey` FOREIGN KEY (`sutuiation_familialeId`) REFERENCES `sutuiation_familiale`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personel` ADD CONSTRAINT `Personel_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enfants` ADD CONSTRAINT `enfants_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rolesonsousactivities` ADD CONSTRAINT `Rolesonsousactivities_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rolesonsousactivities` ADD CONSTRAINT `Rolesonsousactivities_sousActivitieId_fkey` FOREIGN KEY (`sousActivitieId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SousActivite` ADD CONSTRAINT `SousActivite_activiteId_fkey` FOREIGN KEY (`activiteId`) REFERENCES `Activitie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SousActivitiesOnPieces` ADD CONSTRAINT `SousActivitiesOnPieces_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SousActivitiesOnPieces` ADD CONSTRAINT `SousActivitiesOnPieces_pieceId_fkey` FOREIGN KEY (`pieceId`) REFERENCES `Pieces`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DemandeEstivage` ADD CONSTRAINT `DemandeEstivage_centreId_fkey` FOREIGN KEY (`centreId`) REFERENCES `Centre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DemandeEstivage` ADD CONSTRAINT `DemandeEstivage_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DemandeEstivage` ADD CONSTRAINT `DemandeEstivage_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeSport` ADD CONSTRAINT `demandeSport_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeSport` ADD CONSTRAINT `demandeSport_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeHandicape` ADD CONSTRAINT `demandeHandicape_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeHandicape` ADD CONSTRAINT `demandeHandicape_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Centre` ADD CONSTRAINT `Centre_vileId_fkey` FOREIGN KEY (`vileId`) REFERENCES `Vile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appartement` ADD CONSTRAINT `Appartement_centreId_fkey` FOREIGN KEY (`centreId`) REFERENCES `Centre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeCredit` ADD CONSTRAINT `demandeCredit_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeCredit` ADD CONSTRAINT `demandeCredit_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandePelerinage` ADD CONSTRAINT `demandePelerinage_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandePelerinage` ADD CONSTRAINT `demandePelerinage_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `retrait` ADD CONSTRAINT `retrait_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `retrait` ADD CONSTRAINT `retrait_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demamdeMaladies` ADD CONSTRAINT `demamdeMaladies_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demamdeMaladies` ADD CONSTRAINT `demamdeMaladies_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeLang` ADD CONSTRAINT `demandeLang_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeLang` ADD CONSTRAINT `demandeLang_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeCondoleance` ADD CONSTRAINT `demandeCondoleance_typeCondoleanceId_fkey` FOREIGN KEY (`typeCondoleanceId`) REFERENCES `typeCondoleance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeCondoleance` ADD CONSTRAINT `demandeCondoleance_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeCondoleance` ADD CONSTRAINT `demandeCondoleance_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zoo` ADD CONSTRAINT `Zoo_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zoo` ADD CONSTRAINT `Zoo_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mariage` ADD CONSTRAINT `mariage_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mariage` ADD CONSTRAINT `mariage_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeExcursion` ADD CONSTRAINT `demandeExcursion_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeExcursion` ADD CONSTRAINT `demandeExcursion_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeExcursion` ADD CONSTRAINT `demandeExcursion_ExcursionId_fkey` FOREIGN KEY (`ExcursionId`) REFERENCES `Excursion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Excursion` ADD CONSTRAINT `Excursion_vileStartId_fkey` FOREIGN KEY (`vileStartId`) REFERENCES `Vile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Excursion` ADD CONSTRAINT `Excursion_vileEndId_fkey` FOREIGN KEY (`vileEndId`) REFERENCES `Vile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `naissance` ADD CONSTRAINT `naissance_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `naissance` ADD CONSTRAINT `naissance_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rentreeScolaire` ADD CONSTRAINT `rentreeScolaire_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rentreeScolaire` ADD CONSTRAINT `rentreeScolaire_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscreption` ADD CONSTRAINT `inscreption_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscreption` ADD CONSTRAINT `inscreption_SousActivitieId_fkey` FOREIGN KEY (`SousActivitieId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
