/*
  Warnings:

  - You are about to drop the column `Excursion` on the `excursion` table. All the data in the column will be lost.
  - Added the required column `nom` to the `Excursion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `demandeexcursion` MODIFY `Date` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `excursion` DROP COLUMN `Excursion`,
    ADD COLUMN `nom` VARCHAR(191) NOT NULL;
