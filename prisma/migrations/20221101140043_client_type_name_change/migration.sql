/*
  Warnings:

  - You are about to drop the column `type` on the `client_` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `client_` DROP COLUMN `type`,
    ADD COLUMN `type_` TINYINT NOT NULL DEFAULT 0;
