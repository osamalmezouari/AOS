-- CreateTable
CREATE TABLE `demandeCredit` (
    `id` VARCHAR(191) NOT NULL,
    `mantantCredit` DECIMAL(65, 30) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandePelerinage` (
    `id` VARCHAR(191) NOT NULL,
    `annee` BIGINT NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `retrait` (
    `id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `mantantRetraite` INTEGER NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demamdeMaladies` (
    `id` VARCHAR(191) NOT NULL,
    `mantantMaladie` BIGINT NOT NULL,
    `MaladieDecription` VARCHAR(191) NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeLang` (
    `id` VARCHAR(191) NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `CentreLangId` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CentresLang` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `condoleance` (
    `id` VARCHAR(191) NOT NULL,
    `mantantCondoleance` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `typeCondoleanceId` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `typeCondoleance` (
    `id` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Zoo` (
    `id` VARCHAR(191) NOT NULL,
    `date` BIGINT NOT NULL,
    `adulte` INTEGER NOT NULL,
    `enfant` INTEGER NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
ALTER TABLE `demandeLang` ADD CONSTRAINT `demandeLang_CentreLangId_fkey` FOREIGN KEY (`CentreLangId`) REFERENCES `CentresLang`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeLang` ADD CONSTRAINT `demandeLang_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeLang` ADD CONSTRAINT `demandeLang_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `condoleance` ADD CONSTRAINT `condoleance_typeCondoleanceId_fkey` FOREIGN KEY (`typeCondoleanceId`) REFERENCES `typeCondoleance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `condoleance` ADD CONSTRAINT `condoleance_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `condoleance` ADD CONSTRAINT `condoleance_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zoo` ADD CONSTRAINT `Zoo_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Zoo` ADD CONSTRAINT `Zoo_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
