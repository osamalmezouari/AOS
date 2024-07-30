/*
  Warnings:

  - Added the required column `description` to the `demandeHandicape` table without a default value. This is not possible if the table is not empty.
  - Added the required column `annee` to the `demandeSport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `demandehandicape` ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `demandesport` ADD COLUMN `annee` INTEGER NOT NULL;
