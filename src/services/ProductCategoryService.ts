import { PrismaClient, product_category } from "@prisma/client";


export class ProductCategoryService {

    private prisma = new PrismaClient();

    public createProductsCategories = async(productsCategories: product_category[]) =>{

        let productsCategoriesCreated = await this.prisma.product_category.createMany({
            data: productsCategories
        })
        
        return productsCategoriesCreated;
    }
    
}