/*
  Warnings:

  - Added the required column `imgUrl` to the `Centre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `CentresLang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Excursion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `centre` ADD COLUMN `imgUrl` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `centreslang` ADD COLUMN `imgUrl` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `excursion` ADD COLUMN `imgUrl` TEXT NOT NULL;
