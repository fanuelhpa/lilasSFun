import { PrismaClient} from "@prisma/client";

export class UserService{
    
    private prisma = new PrismaClient();
    
    //retorna um cliente
    public findClientById = async (id: string) => {

        let client = await this.prisma.client_.findFirst({
            
            where: {
                id:Number(id),
            },
            select:{
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
}