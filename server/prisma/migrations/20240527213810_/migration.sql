/*
  Warnings:

  - You are about to alter the column `mantantCredit` on the `demandecredit` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Int`.

*/
-- AlterTable
ALTER TABLE `demandecredit` MODIFY `mantantCredit` INTEGER NOT NULL;
