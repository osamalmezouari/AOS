/*
  Warnings:

  - Made the column `status` on table `inscreption` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `personel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `inscreption` MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `personel` MODIFY `password` VARCHAR(191) NOT NULL;
