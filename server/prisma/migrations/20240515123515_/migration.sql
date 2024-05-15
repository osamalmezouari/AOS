/*
  Warnings:

  - A unique constraint covering the columns `[nomFr,nomAr]` on the table `SousActivite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Affectation_StructureFr_key` ON `affectation`;

-- DropIndex
DROP INDEX `Affectation_structureAr_key` ON `affectation`;

-- DropIndex
DROP INDEX `Dotation_descriptionAr_descriptionFr_key` ON `dotation`;

-- DropIndex
DROP INDEX `Dotation_descriptionAr_key` ON `dotation`;

-- DropIndex
DROP INDEX `Dotation_descriptionFr_key` ON `dotation`;

-- DropIndex
DROP INDEX `Pieces_nomAr_nomFr_key` ON `pieces`;

-- DropIndex
DROP INDEX `SousActivite_nomFr_nomAr_descriptionAr_descriptionFr_key` ON `sousactivite`;

-- AlterTable
ALTER TABLE `affectation` MODIFY `structureAr` TEXT NOT NULL,
    MODIFY `StructureFr` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `centre` MODIFY `centreAr` TEXT NOT NULL,
    MODIFY `centreFr` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `demamdemaladies` MODIFY `MaladieDecription` TEXT NOT NULL,
    MODIFY `observation` TEXT NULL;

-- AlterTable
ALTER TABLE `demandecondoleance` MODIFY `description` TEXT NOT NULL,
    MODIFY `observation` TEXT NULL;

-- AlterTable
ALTER TABLE `demandecredit` MODIFY `description` TEXT NOT NULL,
    MODIFY `observation` TEXT NULL;

-- AlterTable
ALTER TABLE `demandeexcursion` MODIFY `observation` TEXT NULL;

-- AlterTable
ALTER TABLE `demandelang` MODIFY `observation` TEXT NULL;

-- AlterTable
ALTER TABLE `demandepelerinage` MODIFY `observation` TEXT NULL;

-- AlterTable
ALTER TABLE `dotation` MODIFY `descriptionAr` TEXT NOT NULL,
    MODIFY `descriptionFr` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `excursion` MODIFY `Description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `mariage` MODIFY `description` TEXT NOT NULL,
    MODIFY `Observation` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `pieces` MODIFY `nomAr` TEXT NOT NULL,
    MODIFY `nomFr` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `retrait` MODIFY `observation` TEXT NULL;

-- AlterTable
ALTER TABLE `sousactivite` MODIFY `descriptionAr` TEXT NOT NULL,
    MODIFY `descriptionFr` TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `SousActivite_nomFr_nomAr_key` ON `SousActivite`(`nomFr`, `nomAr`);
