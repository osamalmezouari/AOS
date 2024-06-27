/*
  Warnings:

  - You are about to drop the column `Observation` on the `mariage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `mariage` DROP COLUMN `Observation`,
    ADD COLUMN `observation` TEXT NULL;
