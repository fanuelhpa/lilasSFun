/*
  Warnings:

  - A unique constraint covering the columns `[number_]` on the table `client_telephone` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `client_telephone_number__key` ON `client_telephone`(`number_`);
