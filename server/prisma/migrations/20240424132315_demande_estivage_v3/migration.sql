-- AlterTable
ALTER TABLE `personel` MODIFY `naissance` VARCHAR(191) NOT NULL,
    MODIFY `adherant` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `isAdmin` BOOLEAN NOT NULL DEFAULT false;
