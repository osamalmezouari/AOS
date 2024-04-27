/*
  Warnings:

  - You are about to drop the `condoleance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `condoleance` DROP FOREIGN KEY `condoleance_personelId_fkey`;

-- DropForeignKey
ALTER TABLE `condoleance` DROP FOREIGN KEY `condoleance_sousActiviteId_fkey`;

-- DropForeignKey
ALTER TABLE `condoleance` DROP FOREIGN KEY `condoleance_typeCondoleanceId_fkey`;

-- DropTable
DROP TABLE `condoleance`;

-- CreateTable
CREATE TABLE `demandeCondoleance` (
    `id` VARCHAR(191) NOT NULL,
    `mantantCondoleance` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` VARCHAR(191) NULL,
    `typeCondoleanceId` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `demandeCondoleance` ADD CONSTRAINT `demandeCondoleance_typeCondoleanceId_fkey` FOREIGN KEY (`typeCondoleanceId`) REFERENCES `typeCondoleance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeCondoleance` ADD CONSTRAINT `demandeCondoleance_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeCondoleance` ADD CONSTRAINT `demandeCondoleance_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
