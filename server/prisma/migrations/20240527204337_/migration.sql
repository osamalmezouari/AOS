/*
  Warnings:

  - You are about to drop the column `MaladieDecription` on the `demamdemaladies` table. All the data in the column will be lost.
  - You are about to alter the column `mantantMaladie` on the `demamdemaladies` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - Added the required column `Decription` to the `demamdeMaladies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `demamdemaladies` DROP COLUMN `MaladieDecription`,
    ADD COLUMN `Decription` TEXT NOT NULL,
    MODIFY `mantantMaladie` INTEGER NULL;
