import { Request, Response } from "express";
import { AddressService } from "../services/AddressService";


export class AddressResource{
    constructor(private readonly addressService: AddressService){}

    public createAdresses = async (req: Request, res: Response) => {

        let {adresses} = req.body;

        let adressesCreated = await this.addressService.createAddresses(adresses);

        res.json({adressesCreated})
    }

}