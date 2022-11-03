import { Request, Response } from "express";
import { ProductCategoryService } from "../services/ProductCategoryService";


export class ProductCategoryResource{
    constructor(private readonly productCategoryService: ProductCategoryService){}

    public createProductsCategories = async (req: Request, res: Response) => {
        
        let {products_categories} = req.body;
        
        let productsCategoriesCreated = await this.productCategoryService.createProductsCategories(products_categories);

        res.json(productsCategoriesCreated);
    }
}