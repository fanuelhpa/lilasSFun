import { Request, Response } from "express";
import { UserService } from "../services/ClientService";


export default class ClientController{

constructor(private readonly userService: UserService){};

    //metodo que busca um cliente por id
    public findClientById = async (req:Request, res: Response) => {

        const {id} = req.params;

        let client = await this.userService.findClientById(id);

        res.json(client)
    }
}