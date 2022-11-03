import { PrismaClient, product } from "@prisma/client";

export class ProductService{

    private prisma = new PrismaClient();

    public createProducts = async (products: product[])=> {

        let productCreated = await this.prisma.product.createMany({

            data: products
        })

        return productCreated;
    }
}