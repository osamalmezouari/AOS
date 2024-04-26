/*
  Warnings:

  - You are about to drop the column `piecesId` on the `sousactivite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nomFr,nomAr]` on the table `Activitie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descriptionAr,descriptionFr]` on the table `Dotation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomAr,nomFr]` on the table `Pieces` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomFr,nomAr,descriptionAr,descriptionFr]` on the table `SousActivite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vileAr,vileFr]` on the table `Vile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `sousactivite` DROP FOREIGN KEY `SousActivite_piecesId_fkey`;

-- DropIndex
DROP INDEX `SousActivite_nomAr_key` ON `sousactivite`;

-- DropIndex
DROP INDEX `SousActivite_nomFr_key` ON `sousactivite`;

-- AlterTable
ALTER TABLE `sousactivite` DROP COLUMN `piecesId`;

-- CreateTable
CREATE TABLE `SousActivitiesOnPieces` (
    `SousActiviteId` VARCHAR(191) NOT NULL,
    `PieceId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`SousActiviteId`, `PieceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Activitie_nomFr_nomAr_key` ON `Activitie`(`nomFr`, `nomAr`);

-- CreateIndex
CREATE UNIQUE INDEX `Dotation_descriptionAr_descriptionFr_key` ON `Dotation`(`descriptionAr`, `descriptionFr`);

-- CreateIndex
CREATE UNIQUE INDEX `Pieces_nomAr_nomFr_key` ON `Pieces`(`nomAr`, `nomFr`);

-- CreateIndex
CREATE UNIQUE INDEX `SousActivite_nomFr_nomAr_descriptionAr_descriptionFr_key` ON `SousActivite`(`nomFr`, `nomAr`, `descriptionAr`, `descriptionFr`);

-- CreateIndex
CREATE UNIQUE INDEX `Vile_vileAr_vileFr_key` ON `Vile`(`vileAr`, `vileFr`);

-- AddForeignKey
ALTER TABLE `SousActivitiesOnPieces` ADD CONSTRAINT `SousActivitiesOnPieces_SousActiviteId_fkey` FOREIGN KEY (`SousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SousActivitiesOnPieces` ADD CONSTRAINT `SousActivitiesOnPieces_PieceId_fkey` FOREIGN KEY (`PieceId`) REFERENCES `Pieces`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
