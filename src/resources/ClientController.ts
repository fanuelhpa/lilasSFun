import { client_ } from "@prisma/client";
import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";


export default class ClientController{

constructor(private readonly clientService: ClientService){};

    //metodo que busca um cliente por id
    public findClientById = async (req:Request, res: Response) => {

        const {id} = req.params;

        let client = await this.clientService.findClientById(id);

        res.json(client)
    }

    //metodo para inserir um client no banco
    public createClient = async(req: Request, res: Response) =>{
        
        const {name, email, password, type} = req.body;

        const insertedClient: client_ = await this.clientService.insertClient(
                name, email, password, Number(type)); 

        if(insertedClient){

            return res.json({
                insertedClient,   
            });

        }
        else{
            return res.json({
                Alert: 'Erro ao inserir o cliente'
            })
        }
    }
}
