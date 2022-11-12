import {client_address, Prisma, PrismaClient} from "@prisma/client";


export class AddressService{

    private prisma = new PrismaClient();

    public createAddresses = async (adresses: client_address[]) => {

        let adressesCreated: Prisma.BatchPayload = await this.prisma.client_address.createMany({

            data: adresses,
        });

        return adressesCreated;
    }
    
}