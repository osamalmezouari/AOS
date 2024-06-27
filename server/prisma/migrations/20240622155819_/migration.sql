/*
  Warnings:

  - You are about to drop the column `mantantMaladie` on the `demamdemaladies` table. All the data in the column will be lost.
  - You are about to drop the column `mantantCondoleance` on the `demandecondoleance` table. All the data in the column will be lost.
  - You are about to drop the column `mantantCredit` on the `demandecredit` table. All the data in the column will be lost.
  - You are about to drop the column `Mantant` on the `mariage` table. All the data in the column will be lost.
  - You are about to drop the column `mantant` on the `naissance` table. All the data in the column will be lost.
  - You are about to drop the column `mantant` on the `rentreescolaire` table. All the data in the column will be lost.
  - You are about to drop the column `mantantRetraite` on the `retrait` table. All the data in the column will be lost.
  - You are about to drop the `dotation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `montant` to the `demandeCredit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `dotation` DROP FOREIGN KEY `Dotation_SousActivitieId_fkey`;

-- AlterTable
ALTER TABLE `demamdemaladies` DROP COLUMN `mantantMaladie`,
    ADD COLUMN `montant` INTEGER NULL;

-- AlterTable
ALTER TABLE `demandecondoleance` DROP COLUMN `mantantCondoleance`,
    ADD COLUMN `montant` INTEGER NULL;

-- AlterTable
ALTER TABLE `demandecredit` DROP COLUMN `mantantCredit`,
    ADD COLUMN `montant` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `excursion` ADD COLUMN `montant` INTEGER NULL;

-- AlterTable
ALTER TABLE `mariage` DROP COLUMN `Mantant`,
    ADD COLUMN `montant` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `naissance` DROP COLUMN `mantant`,
    ADD COLUMN `montant` INTEGER NULL;

-- AlterTable
ALTER TABLE `rentreescolaire` DROP COLUMN `mantant`,
    ADD COLUMN `montant` INTEGER NULL;

-- AlterTable
ALTER TABLE `retrait` DROP COLUMN `mantantRetraite`,
    ADD COLUMN `montant` INTEGER NULL;

-- DropTable
DROP TABLE `dotation`;
