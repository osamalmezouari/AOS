-- CreateTable
CREATE TABLE `Personel` (
    `id` VARCHAR(191) NOT NULL,
    `matricule` INTEGER NOT NULL,
    `nom_fr` VARCHAR(191) NOT NULL,
    `nom_ar` VARCHAR(191) NOT NULL,
    `prenom_ar` VARCHAR(191) NOT NULL,
    `prenom_fr` VARCHAR(191) NOT NULL,
    `naissance` BIGINT NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `echelle` INTEGER NOT NULL,
    `adherant` BOOLEAN NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,
    `AffectationId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Personel_matricule_key`(`matricule`),
    UNIQUE INDEX `Personel_nom_fr_key`(`nom_fr`),
    UNIQUE INDEX `Personel_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Affectation` (
    `id` VARCHAR(191) NOT NULL,
    `structureAr` VARCHAR(191) NOT NULL,
    `StructureFr` VARCHAR(191) NOT NULL,
    `abrviation` VARCHAR(191) NOT NULL,
    `TypeDepartement` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SousActivite` (
    `id` VARCHAR(191) NOT NULL,
    `nomAr` VARCHAR(191) NOT NULL,
    `nomFr` VARCHAR(191) NOT NULL,
    `descriptionAr` VARCHAR(191) NOT NULL,
    `descriptionFr` VARCHAR(191) NOT NULL,
    `piecesId` VARCHAR(191) NOT NULL,
    `activiteId` VARCHAR(191) NOT NULL,
    `dotationId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SousActivite_nomAr_key`(`nomAr`),
    UNIQUE INDEX `SousActivite_nomFr_key`(`nomFr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activitie` (
    `id` VARCHAR(191) NOT NULL,
    `nomAr` VARCHAR(191) NOT NULL,
    `nomFr` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Activitie_nomAr_key`(`nomAr`),
    UNIQUE INDEX `Activitie_nomFr_key`(`nomFr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pieces` (
    `id` VARCHAR(191) NOT NULL,
    `nomAr` VARCHAR(191) NOT NULL,
    `nomFr` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Pieces_nomAr_key`(`nomAr`),
    UNIQUE INDEX `Pieces_nomFr_key`(`nomFr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dotation` (
    `id` VARCHAR(191) NOT NULL,
    `dotation` DOUBLE NOT NULL,
    `descriptionAr` VARCHAR(191) NOT NULL,
    `descriptionFr` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Dotation_descriptionAr_key`(`descriptionAr`),
    UNIQUE INDEX `Dotation_descriptionFr_key`(`descriptionFr`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vile` (
    `id` VARCHAR(191) NOT NULL,
    `vileAr` VARCHAR(191) NOT NULL,
    `vileFr` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DemandeEstivage` (
    `id` VARCHAR(191) NOT NULL,
    `date` BIGINT NOT NULL,
    `effet` BIGINT NOT NULL,
    `periode` VARCHAR(191) NOT NULL,
    `centreId` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Centres` (
    `id` VARCHAR(191) NOT NULL,
    `centreAr` VARCHAR(191) NOT NULL,
    `centreFr` VARCHAR(191) NOT NULL,
    `vileId` VARCHAR(191) NOT NULL,
    `TypeEstivageId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appartements` (
    `id` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `centreId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeEsstivage` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personel` ADD CONSTRAINT `Personel_AffectationId_fkey` FOREIGN KEY (`AffectationId`) REFERENCES `Affectation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SousActivite` ADD CONSTRAINT `SousActivite_piecesId_fkey` FOREIGN KEY (`piecesId`) REFERENCES `Pieces`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SousActivite` ADD CONSTRAINT `SousActivite_activiteId_fkey` FOREIGN KEY (`activiteId`) REFERENCES `Activitie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SousActivite` ADD CONSTRAINT `SousActivite_dotationId_fkey` FOREIGN KEY (`dotationId`) REFERENCES `Dotation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DemandeEstivage` ADD CONSTRAINT `DemandeEstivage_centreId_fkey` FOREIGN KEY (`centreId`) REFERENCES `Centres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DemandeEstivage` ADD CONSTRAINT `DemandeEstivage_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DemandeEstivage` ADD CONSTRAINT `DemandeEstivage_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Centres` ADD CONSTRAINT `Centres_vileId_fkey` FOREIGN KEY (`vileId`) REFERENCES `Vile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Centres` ADD CONSTRAINT `Centres_TypeEstivageId_fkey` FOREIGN KEY (`TypeEstivageId`) REFERENCES `TypeEsstivage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appartements` ADD CONSTRAINT `Appartements_centreId_fkey` FOREIGN KEY (`centreId`) REFERENCES `Centres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
