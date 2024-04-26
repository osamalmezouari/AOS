/*
  Warnings:

  - The `effet` column on the `demandeestivage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `sousactivitiesonpieces` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `PieceId` on the `sousactivitiesonpieces` table. All the data in the column will be lost.
  - You are about to drop the column `SousActiviteId` on the `sousactivitiesonpieces` table. All the data in the column will be lost.
  - Added the required column `pieceId` to the `SousActivitiesOnPieces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sousActiviteId` to the `SousActivitiesOnPieces` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sousactivitiesonpieces` DROP FOREIGN KEY `SousActivitiesOnPieces_PieceId_fkey`;

-- DropForeignKey
ALTER TABLE `sousactivitiesonpieces` DROP FOREIGN KEY `SousActivitiesOnPieces_SousActiviteId_fkey`;

-- DropIndex
DROP INDEX `Pieces_nomAr_key` ON `pieces`;

-- DropIndex
DROP INDEX `Pieces_nomFr_key` ON `pieces`;

-- AlterTable
ALTER TABLE `demandeestivage` DROP COLUMN `effet`,
    ADD COLUMN `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `personel` MODIFY `adherant` BOOLEAN NULL DEFAULT false,
    MODIFY `isAdmin` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `sousactivitiesonpieces` DROP PRIMARY KEY,
    DROP COLUMN `PieceId`,
    DROP COLUMN `SousActiviteId`,
    ADD COLUMN `pieceId` VARCHAR(191) NOT NULL,
    ADD COLUMN `sousActiviteId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`sousActiviteId`, `pieceId`);

-- AddForeignKey
ALTER TABLE `SousActivitiesOnPieces` ADD CONSTRAINT `SousActivitiesOnPieces_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SousActivitiesOnPieces` ADD CONSTRAINT `SousActivitiesOnPieces_pieceId_fkey` FOREIGN KEY (`pieceId`) REFERENCES `Pieces`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
