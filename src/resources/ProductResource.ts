import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";


export class ProductResource{
    constructor(private readonly productService: ProductService){}

    public createProducts = async (req: Request, res: Response) =>{
        
        let {products} = req.body;

        let productsCreated = await this.productService.createProducts(products);

        res.json(productsCreated);
    }

}