/*
  Warnings:

  - Added the required column `imgUrl` to the `SousActivite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sousactivite` ADD COLUMN `imgUrl` TEXT NOT NULL;
