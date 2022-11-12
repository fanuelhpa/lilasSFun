import {Prisma, PrismaClient, city} from "@prisma/client";


export class CityService{

    private prisma = new PrismaClient();

    public createCities = async (cities: city[]) => {

        let citiesCreated: Prisma.BatchPayload = await this.prisma.city.createMany({

            data: cities,
        });
        return citiesCreated;
    }
}
