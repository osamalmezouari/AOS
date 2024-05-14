/*
  Warnings:

  - You are about to drop the column `TypeDepartement` on the `affectation` table. All the data in the column will be lost.
  - Added the required column `TypeStructure` to the `Affectation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `affectation` DROP COLUMN `TypeDepartement`,
    ADD COLUMN `TypeStructure` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `demamdemaladies` ADD COLUMN `Status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `demandecondoleance` ADD COLUMN `Status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `demandecredit` ADD COLUMN `Status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `demandeestivage` ADD COLUMN `Status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `demandelang` ADD COLUMN `Status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `demandepelerinage` ADD COLUMN `Status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `retrait` ADD COLUMN `Status` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `zoo` ADD COLUMN `Status` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `mariage` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `effet` BIGINT NOT NULL,
    `Status` VARCHAR(191) NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `Mantant` VARCHAR(191) NULL,
    `Observation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeExcursion` (
    `id` VARCHAR(191) NOT NULL,
    `Date` BIGINT NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `ExcursionId` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Excursion` (
    `id` VARCHAR(191) NOT NULL,
    `Excursion` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Date` BIGINT NOT NULL,
    `vileStartId` VARCHAR(191) NOT NULL,
    `vileEndId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inscreption` (
    `id` VARCHAR(191) NOT NULL,
    `annee` BIGINT NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `personelId` VARCHAR(191) NOT NULL,
    `SousActivitieId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mariage` ADD CONSTRAINT `mariage_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeExcursion` ADD CONSTRAINT `demandeExcursion_ExcursionId_fkey` FOREIGN KEY (`ExcursionId`) REFERENCES `Excursion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeExcursion` ADD CONSTRAINT `demandeExcursion_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeExcursion` ADD CONSTRAINT `demandeExcursion_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Excursion` ADD CONSTRAINT `Excursion_vileStartId_fkey` FOREIGN KEY (`vileStartId`) REFERENCES `Vile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Excursion` ADD CONSTRAINT `Excursion_vileEndId_fkey` FOREIGN KEY (`vileEndId`) REFERENCES `Vile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscreption` ADD CONSTRAINT `inscreption_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscreption` ADD CONSTRAINT `inscreption_SousActivitieId_fkey` FOREIGN KEY (`SousActivitieId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
