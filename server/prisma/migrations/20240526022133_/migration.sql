/*
  Warnings:

  - The `effet` column on the `mariage` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `mariage` DROP COLUMN `effet`,
    ADD COLUMN `effet` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `Observation` TEXT NULL;
