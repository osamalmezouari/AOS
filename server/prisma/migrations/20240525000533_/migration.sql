/*
  Warnings:

  - You are about to alter the column `annee` on the `inscreption` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `inscreption` MODIFY `annee` INTEGER NOT NULL;
