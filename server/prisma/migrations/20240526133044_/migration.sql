/*
  Warnings:

  - Added the required column `sousActiviteId` to the `mariage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mariage` ADD COLUMN `sousActiviteId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `mariage` ADD CONSTRAINT `mariage_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
