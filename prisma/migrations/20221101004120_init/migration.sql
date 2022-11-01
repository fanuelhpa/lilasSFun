-- CreateTable
CREATE TABLE `address` (
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

-- CreateTable
CREATE TABLE `city` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_` VARCHAR(190) NOT NULL,
    `state_id` INTEGER NOT NULL,

    INDEX `fk_city_state_idx`(`state_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_` VARCHAR(190) NOT NULL,
    `email` VARCHAR(190) NOT NULL,
    `password` VARCHAR(190) NOT NULL,
    `type` TINYINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_telephone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(100) NOT NULL,
    `client_id` INTEGER NOT NULL,

    INDEX `fk_client_telephone_client1_idx`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_` VARCHAR(190) NOT NULL,
    `inventory_quantity` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `product_category_id` INTEGER NOT NULL,

    INDEX `fk_product_product_category1_idx`(`product_category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_` VARCHAR(190) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_provider` (
    `provider_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    INDEX `fk_product_provider_product1_idx`(`product_id`),
    INDEX `fk_product_provider_provider1_idx`(`provider_id`),
    PRIMARY KEY (`provider_id`, `product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_` VARCHAR(190) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `provider_telephone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(100) NOT NULL,
    `provider_id` INTEGER NOT NULL,

    INDEX `fk_provider_telephone_provider1_idx`(`provider_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase_order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NOT NULL,
    `date` DATETIME(0) NOT NULL,
    `payment_date` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase_order_item` (
    `purchase_order_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `discount` DOUBLE NULL,

    INDEX `fk_purchase_order_item_product1_idx`(`product_id`),
    PRIMARY KEY (`purchase_order_id`, `product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales_order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NOT NULL,
    `date` DATETIME(0) NOT NULL,
    `payment_date` DATETIME(0) NULL,
    `client_id` INTEGER NOT NULL,

    INDEX `fk_sales_order_client1_idx`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales_order_item` (
    `sales_order_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `dicount` DOUBLE NULL,

    INDEX `fk_sales_order_item_product1_idx`(`product_id`),
    PRIMARY KEY (`sales_order_id`, `product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `state` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_` VARCHAR(190) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `fk_address_city1` FOREIGN KEY (`city_id`) REFERENCES `city`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `fk_address_client1` FOREIGN KEY (`client_id`) REFERENCES `client_`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `fk_city_state` FOREIGN KEY (`state_id`) REFERENCES `state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client_telephone` ADD CONSTRAINT `fk_client_telephone_client1` FOREIGN KEY (`client_id`) REFERENCES `client_`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_product_product_category1` FOREIGN KEY (`product_category_id`) REFERENCES `product_category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product_provider` ADD CONSTRAINT `fk_product_provider_product1` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product_provider` ADD CONSTRAINT `fk_product_provider_provider1` FOREIGN KEY (`provider_id`) REFERENCES `provider`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `provider_telephone` ADD CONSTRAINT `fk_provider_telephone_provider1` FOREIGN KEY (`provider_id`) REFERENCES `provider`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `purchase_order_item` ADD CONSTRAINT `fk_purchase_order_item_product1` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `purchase_order_item` ADD CONSTRAINT `fk_purchase_order_item_purchase_order1` FOREIGN KEY (`purchase_order_id`) REFERENCES `purchase_order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sales_order` ADD CONSTRAINT `fk_sales_order_client1` FOREIGN KEY (`client_id`) REFERENCES `client_`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sales_order_item` ADD CONSTRAINT `fk_sales_order_item_product1` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sales_order_item` ADD CONSTRAINT `fk_sales_order_item_sales_order1` FOREIGN KEY (`sales_order_id`) REFERENCES `sales_order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
