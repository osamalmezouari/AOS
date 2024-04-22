/*
  Warnings:

  - You are about to drop the `appartements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `centres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `appartements` DROP FOREIGN KEY `Appartements_centreId_fkey`;

-- DropForeignKey
ALTER TABLE `centres` DROP FOREIGN KEY `Centres_TypeEstivageId_fkey`;

-- DropForeignKey
ALTER TABLE `centres` DROP FOREIGN KEY `Centres_vileId_fkey`;

-- DropForeignKey
ALTER TABLE `demandeestivage` DROP FOREIGN KEY `DemandeEstivage_centreId_fkey`;

-- DropTable
DROP TABLE `appartements`;

-- DropTable
DROP TABLE `centres`;

-- CreateTable
CREATE TABLE `Centre` (
    `id` VARCHAR(191) NOT NULL,
    `centreAr` VARCHAR(191) NOT NULL,
    `centreFr` VARCHAR(191) NOT NULL,
    `vileId` VARCHAR(191) NOT NULL,
    `TypeEstivageId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appartement` (
    `id` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `centreId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DemandeEstivage` ADD CONSTRAINT `DemandeEstivage_centreId_fkey` FOREIGN KEY (`centreId`) REFERENCES `Centre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Centre` ADD CONSTRAINT `Centre_vileId_fkey` FOREIGN KEY (`vileId`) REFERENCES `Vile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Centre` ADD CONSTRAINT `Centre_TypeEstivageId_fkey` FOREIGN KEY (`TypeEstivageId`) REFERENCES `TypeEsstivage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appartement` ADD CONSTRAINT `Appartement_centreId_fkey` FOREIGN KEY (`centreId`) REFERENCES `Centre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
