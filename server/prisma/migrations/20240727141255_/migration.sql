/*
  Warnings:

  - You are about to drop the column `createAt` on the `personel` table. All the data in the column will be lost.
  - You are about to drop the column `dateRepense` on the `personel` table. All the data in the column will be lost.
  - Added the required column `roleId` to the `Personel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sutuiation_familialeId` to the `Personel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `personel` DROP COLUMN `createAt`,
    DROP COLUMN `dateRepense`,
    ADD COLUMN `roleId` VARCHAR(191) NOT NULL,
    ADD COLUMN `sutuiation_familialeId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `sutuiation_familiale` (
    `id` VARCHAR(191) NOT NULL,
    `sutiation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enfants` (
    `id` VARCHAR(191) NOT NULL,
    `nom_ar` VARCHAR(191) NOT NULL,
    `nom_fr` VARCHAR(191) NOT NULL,
    `naissance` DATETIME(3) NOT NULL,
    `sexe` VARCHAR(191) NOT NULL,
    `personelId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `id` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Roles_role_key`(`role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rolesonsousactivities` (
    `roleId` VARCHAR(191) NOT NULL,
    `sousActivitieId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Rolesonsousactivities_sousActivitieId_roleId_key`(`sousActivitieId`, `roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeSport` (
    `id` VARCHAR(191) NOT NULL,
    `montant` INTEGER NOT NULL,
    `enfant` VARCHAR(191) NOT NULL,
    `montantAlloue` INTEGER NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `demandeHandicape` (
    `id` VARCHAR(191) NOT NULL,
    `montant` INTEGER NULL,
    `enfant` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personel` ADD CONSTRAINT `Personel_sutuiation_familialeId_fkey` FOREIGN KEY (`sutuiation_familialeId`) REFERENCES `sutuiation_familiale`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Personel` ADD CONSTRAINT `Personel_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enfants` ADD CONSTRAINT `enfants_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rolesonsousactivities` ADD CONSTRAINT `Rolesonsousactivities_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rolesonsousactivities` ADD CONSTRAINT `Rolesonsousactivities_sousActivitieId_fkey` FOREIGN KEY (`sousActivitieId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeSport` ADD CONSTRAINT `demandeSport_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeSport` ADD CONSTRAINT `demandeSport_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeHandicape` ADD CONSTRAINT `demandeHandicape_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `demandeHandicape` ADD CONSTRAINT `demandeHandicape_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
