/*
  Warnings:

  - You are about to drop the column `date` on the `demandeestivage` table. All the data in the column will be lost.
  - You are about to drop the column `periode` on the `demandeestivage` table. All the data in the column will be lost.
  - Added the required column `date_demande` to the `DemandeEstivage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_fin` to the `DemandeEstivage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `demandeestivage` DROP COLUMN `date`,
    DROP COLUMN `periode`,
    ADD COLUMN `date_demande` BIGINT NOT NULL,
    ADD COLUMN `date_fin` BIGINT NOT NULL;
