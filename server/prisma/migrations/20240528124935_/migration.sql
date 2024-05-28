/*
  Warnings:

  - Added the required column `description` to the `Zoo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `zoo` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    MODIFY `date` VARCHAR(191) NOT NULL;
