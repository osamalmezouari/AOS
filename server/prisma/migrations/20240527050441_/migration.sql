-- CreateTable
CREATE TABLE `naissance` (
    `id` VARCHAR(191) NOT NULL,
    `Date` VARCHAR(191) NOT NULL,
    `mantant` INTEGER NULL,
    `nombre` INTEGER NOT NULL,
    `Status` VARCHAR(191) NULL,
    `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observation` TEXT NULL,
    `personelId` VARCHAR(191) NOT NULL,
    `sousActiviteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `naissance` ADD CONSTRAINT `naissance_personelId_fkey` FOREIGN KEY (`personelId`) REFERENCES `Personel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `naissance` ADD CONSTRAINT `naissance_sousActiviteId_fkey` FOREIGN KEY (`sousActiviteId`) REFERENCES `SousActivite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
