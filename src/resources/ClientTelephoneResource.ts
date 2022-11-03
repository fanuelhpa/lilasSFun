import { client_telephone } from "@prisma/client";
import { Request, Response } from "express";
import { ClientTelephoneService } from "../services/ClientTelephoneService";


export default class ClientTelephoneResource{
    constructor(private readonly clientTelephoneService: ClientTelephoneService){};

    public createClientTelephone = async (req: Request, res: Response) =>{
        
        const {telephones} = req.body;
        
        const clientTelephonesCreated = await this.clientTelephoneService.createClientTelephones(telephones);

        res.json({clientTelephonesCreated});
    }
}