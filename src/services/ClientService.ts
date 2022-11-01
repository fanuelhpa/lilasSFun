import { client_, client_telephone, PrismaClient} from "@prisma/client";

export class ClientService {
    
    private prisma = new PrismaClient();
    
    //retorna um cliente pelo id
    public findClientById = async (id: string) => {

        let client = await this.prisma.client_.findFirst({
            
            where: {
                id:Number(id),
            },
            select:{
                id: true,
                name_: true,
                email: true,
                client_telephone:{
                   select:{
                    number_: true,
                   }
                }
            }
    
    });

    return client;
    }

    //Insere um cliente no sistema
    public insertClient = async (name: string, 
         email: string, password: string, type: number): Promise <client_> =>{
 
            let insertedClient = await this.prisma.client_.create({

                data:{
                    name_: name,
                    email: email,
                    password_:password,
                    type_: type,
                }
            
            });

            return insertedClient;
    }

    //cria os telefones dos clientes
    public createTelephones = async (clientId: number, client_telephones: client_telephone[]) =>{
        
        client_telephones.forEach(element => {
            element.client_id = clientId
        });

        let telephonesCreated = await this.prisma.client_telephone.createMany({
           
          data: client_telephones,

        })
        return telephonesCreated;
    }
}