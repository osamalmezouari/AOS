/*
  Warnings:

  - You are about to drop the column `TypeEstivageId` on the `centre` table. All the data in the column will be lost.
  - You are about to drop the `typeesstivage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `centre` DROP FOREIGN KEY `Centre_TypeEstivageId_fkey`;

-- AlterTable
ALTER TABLE `centre` DROP COLUMN `TypeEstivageId`;

-- AlterTable
ALTER TABLE `demandeestivage` MODIFY `centreId` VARCHAR(191) NOT NULL DEFAULT '0';

-- DropTable
DROP TABLE `typeesstivage`;
