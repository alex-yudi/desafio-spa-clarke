import { prisma } from "@/lib/prisma";

export async function getListOfAgentsByMinKwh(lim_min_kwh: number) {
    const listOfAgents = await prisma.agent.findMany({
        where: {
            lim_min_kwh: {
                gt: lim_min_kwh,
            }
        }
    });

    return listOfAgents;
}