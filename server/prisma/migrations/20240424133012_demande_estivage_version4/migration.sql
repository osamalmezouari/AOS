/*
  Warnings:

  - A unique constraint covering the columns `[structureAr]` on the table `Affectation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[StructureFr]` on the table `Affectation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Affectation_structureAr_key` ON `Affectation`(`structureAr`);

-- CreateIndex
CREATE UNIQUE INDEX `Affectation_StructureFr_key` ON `Affectation`(`StructureFr`);
