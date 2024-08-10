/*
  Warnings:

  - A unique constraint covering the columns `[parentId,annee,montant,enfant,periode]` on the table `demandeLang` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `demandeLang_parentId_annee_montant_enfant_periode_key` ON `demandeLang`(`parentId`, `annee`, `montant`, `enfant`, `periode`);
