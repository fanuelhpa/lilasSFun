import { Request, Response } from "express";
import { ClientTelephoneService } from "../services/ClientTelephoneService";


export class ClientTelephoneResource{

    constructor(private readonly clientTelephoneService: ClientTelephoneService){};

    public createClientTelephone = async (req: Request, res: Response) =>{
        
        const {client_id, number_} = req.body;
        
        try{
            const clientTelephoneCreated = await this.clientTelephoneService.createClientTelephone(client_id, number_);
            
            if(clientTelephoneCreated){
                res.json({response: "Telephone sucessfull created!"});
            }
        }
        catch(e){
            res.json({
                response: [
                    {
                        error: "The telephone allready exists"   
                    }, 
                    e
                ]
            })
        }
    }
}