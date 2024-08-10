/*
  Warnings:

  - Added the required column `annee` to the `rentreeScolaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enfant` to the `rentreeScolaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rentreescolaire` ADD COLUMN `annee` VARCHAR(191) NOT NULL,
    ADD COLUMN `enfant` VARCHAR(191) NOT NULL;
