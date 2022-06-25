import { prisma } from "./prisma";

export interface Enxoval {
    com: string;
    ite: string;
    tem: boolean;
}

export async function getAllEnxoval() {
    const data = await prisma.hENX.findMany();
    return data;
}

export async function createEnxoval(com: string, ite: string, tem: boolean = false) {
    await prisma.hENX.create({
    data: {
        com,
        ite,
        tem
    }
    })
}