/*
  Warnings:

  - You are about to drop the column `nom` on the `typecondoleance` table. All the data in the column will be lost.
  - Added the required column `nomAr` to the `typeCondoleance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomFr` to the `typeCondoleance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `typecondoleance` DROP COLUMN `nom`,
    ADD COLUMN `nomAr` VARCHAR(191) NOT NULL,
    ADD COLUMN `nomFr` VARCHAR(191) NOT NULL;
