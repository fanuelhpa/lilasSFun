import { client_ } from "@prisma/client";
import { Console } from "console";
import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";
import { ClientTelephoneService } from "../services/ClientTelephoneService";


export class ClientResource{

constructor(private readonly clientService: ClientService){};

    private clientTelephoneService = new ClientTelephoneService();

    //metodo que busca um cliente por id
    public findClientById = async (req:Request, res: Response) => {

        const {id} = req.params;

        let client = await this.clientService.findClientById(id);

        res.json(client)
    }

    //metodo para inserir um client no banco
    public createClient = async (req: Request, res: Response) => {
        
        const {name_, email, password_, type_, client_telephones} = req.body;

        let client = {
            name_: name_,
            email: email,
            password_: password_,
            type_: type_,
        }

        try{
            let clientCreated: client_ = await this.clientService.insertClients(client);
            
            if(clientCreated){
                await this.clientTelephoneService.createClientTelephones(clientCreated.id, client_telephones);
            }
            res.json({
                response: "Client sucessfull created"
            });
        }
        catch(e){
           res.json({
            response: e,
           })
        }
    }
}
