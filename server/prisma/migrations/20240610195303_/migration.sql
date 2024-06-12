/*
  Warnings:

  - Added the required column `montant` to the `DemandeEstivage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `demandeestivage` ADD COLUMN `montant` INTEGER NOT NULL;
