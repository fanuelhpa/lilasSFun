
import { client_telephone, PrismaClient, Prisma } from "@prisma/client";


export class ClientTelephoneService{

    private prisma = new PrismaClient();

    //cria um telefone de cliente
    public createClientTelephone = async (client_id: number, number: string)=> {
        
        let createdTelephone = await this.prisma.client_telephone.create({
            
            data:{
                client_id: client_id,
                number_: number
            }
        });

        return createdTelephone;
    }

    //cria os telefones dos clientes no cadastro do cliente
    public createClientTelephones = async (id: number, client_telephones: client_telephone[]) =>{

        client_telephones.forEach(element => {
            element.client_id = id;
        });

        let clientTelephonesCreated: Prisma.BatchPayload= await this.prisma.client_telephone.createMany({
        
           data: client_telephones,
       })
       
        return clientTelephonesCreated;
    }
}