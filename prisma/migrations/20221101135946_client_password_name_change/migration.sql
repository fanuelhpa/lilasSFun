/*
  Warnings:

  - You are about to drop the column `password` on the `client_` table. All the data in the column will be lost.
  - Added the required column `password_` to the `client_` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client_` DROP COLUMN `password`,
    ADD COLUMN `password_` VARCHAR(190) NOT NULL;
