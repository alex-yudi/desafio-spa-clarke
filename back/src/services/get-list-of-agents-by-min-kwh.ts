import { prisma } from "@/lib/prisma";

export async function getListOfAgentsByMinKwh() {
    const listOfAgents = await prisma.agent.findMany();

    return listOfAgents;
}