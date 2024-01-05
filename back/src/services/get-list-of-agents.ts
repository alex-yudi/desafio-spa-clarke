import { prisma } from "@/lib/prisma";

export async function getListOfAgents() {
    const listOfAgents = await prisma.agent.findMany();

    return listOfAgents;
}