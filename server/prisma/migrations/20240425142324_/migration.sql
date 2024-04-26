/*
  Warnings:

  - You are about to drop the column `date_demande` on the `demandeestivage` table. All the data in the column will be lost.
  - You are about to drop the column `date_fin` on the `demandeestivage` table. All the data in the column will be lost.
  - Added the required column `date_entre` to the `DemandeEstivage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_sortie` to the `DemandeEstivage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `demandeestivage` DROP COLUMN `date_demande`,
    DROP COLUMN `date_fin`,
    ADD COLUMN `appartementId` VARCHAR(191) NULL,
    ADD COLUMN `date_entre` BIGINT NOT NULL,
    ADD COLUMN `date_sortie` BIGINT NOT NULL;
