import {Prisma, PrismaClient, state} from "@prisma/client";


export class StateService{

    private prisma = new PrismaClient();

    public createStates = async (states: state[]) => {

        let statesCreated: Prisma.BatchPayload = await this.prisma.state.createMany({

            data: states,
        });
        return statesCreated;
    }   
}
