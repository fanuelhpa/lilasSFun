
import { client_telephone, PrismaClient, Prisma } from "@prisma/client";


export class ClientTelephoneService{

    private prisma = new PrismaClient();

    //cria os telefones dos clientes
    public createClientTelephones = async (client_telephones: client_telephone[]) =>{

        let clientTelephonesCreated: Prisma.BatchPayload= await this.prisma.client_telephone.createMany({
        
           data: client_telephones,

       })

        return clientTelephonesCreated;
    }
}