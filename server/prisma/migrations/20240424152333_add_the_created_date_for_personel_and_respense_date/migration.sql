/*
  Warnings:

  - Added the required column `dateRepense` to the `Personel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `personel` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dateRepense` DATETIME(3) NOT NULL;
