/*
  Warnings:

  - You are about to alter the column `Date` on the `excursion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE `excursion` MODIFY `Date` BIGINT NOT NULL;
