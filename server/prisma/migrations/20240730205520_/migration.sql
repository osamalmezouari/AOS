/*
  Warnings:

  - A unique constraint covering the columns `[parentId,annee,enfant,periode]` on the table `demandeLang` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `demandeLang_parentId_annee_montant_enfant_periode_key` ON `demandelang`;

-- CreateIndex
CREATE UNIQUE INDEX `demandeLang_parentId_annee_enfant_periode_key` ON `demandeLang`(`parentId`, `annee`, `enfant`, `periode`);
