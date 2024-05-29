/*
  Warnings:

  - You are about to alter the column `date_entre` on the `demandeestivage` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.
  - You are about to alter the column `date_sortie` on the `demandeestivage` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE `demandeestivage` MODIFY `date_entre` BIGINT NOT NULL,
    MODIFY `date_sortie` BIGINT NOT NULL;
