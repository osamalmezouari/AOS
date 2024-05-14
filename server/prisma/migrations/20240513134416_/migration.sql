/*
  Warnings:

  - You are about to drop the column `dotationId` on the `sousactivite` table. All the data in the column will be lost.
  - Added the required column `SousActivitieId` to the `Dotation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sousactivite` DROP FOREIGN KEY `SousActivite_dotationId_fkey`;

-- AlterTable
ALTER TABLE `dotation` ADD COLUMN `SousActivitieId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `sousactivite` DROP COLUMN `dotationId`;

-- AddForeignKey
ALTER TABLE `Dotation` ADD CONSTRAINT `Dotation_SousActivitieId_fkey` FOREIGN KEY (`SousActivitieId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
