/*
  Warnings:

  - Added the required column `nombre` to the `Excursion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `excursion` ADD COLUMN `nombre` INTEGER NOT NULL;
