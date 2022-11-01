/*
  Warnings:

  - You are about to drop the column `number` on the `client_telephone` table. All the data in the column will be lost.
  - Added the required column `number_` to the `client_telephone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client_telephone` DROP COLUMN `number`,
    ADD COLUMN `number_` VARCHAR(100) NOT NULL;
