/*
  Warnings:

  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `fk_address_city1`;

-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `fk_address_client1`;

-- DropTable
DROP TABLE `address`;

-- CreateTable
CREATE TABLE `client_address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(190) NOT NULL,
    `number` VARCHAR(45) NOT NULL,
    `zipcode` VARCHAR(45) NOT NULL,
    `city_id` INTEGER NOT NULL,
    `client_id` INTEGER NOT NULL,

    INDEX `fk_address_city1_idx`(`city_id`),
    INDEX `fk_address_client1_idx`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `client_address` ADD CONSTRAINT `fk_address_city1` FOREIGN KEY (`city_id`) REFERENCES `city`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client_address` ADD CONSTRAINT `fk_address_client1` FOREIGN KEY (`client_id`) REFERENCES `client_`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
