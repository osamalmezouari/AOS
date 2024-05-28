/*
  Warnings:

  - You are about to drop the column `CentreLangId` on the `demandelang` table. All the data in the column will be lost.
  - You are about to drop the `centreslang` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `demandeLang` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `demandelang` DROP FOREIGN KEY `demandeLang_CentreLangId_fkey`;

-- AlterTable
ALTER TABLE `demandelang` DROP COLUMN `CentreLangId`,
    ADD COLUMN `description` TEXT NOT NULL;

-- DropTable
DROP TABLE `centreslang`;
