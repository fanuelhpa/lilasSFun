import { Request, Response } from "express";
import { CityService } from "../services/CityService";


export class CityResource{
    constructor(private readonly cityService: CityService){}

    public createCities = async (req: Request, res: Response) => {

        let {cities} = req.body;

        let citiesCreated = await this.cityService.createCities(cities);

        res.json({citiesCreated});
    }
}
