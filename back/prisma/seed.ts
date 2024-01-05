import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const agent1 = await prisma.agent.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: "Teste",
            link_logo: "Teste",
            state_origin: "Teste",
            cost_kwh: 1,
            lim_min_kwh: 1,
            total_customers: 1,
            evaluation_customers: 1,
        },
    });

    const agent2 = await prisma.agent.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            name: "Teste2",
            link_logo: "Teste2",
            state_origin: "Teste2",
            cost_kwh: 2,
            lim_min_kwh: 2,
            total_customers: 2,
            evaluation_customers: 2,
        },
    });

    const agent3 = await prisma.agent.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            name: "Teste3",
            link_logo: "Teste3",
            state_origin: "Teste3",
            cost_kwh: 3,
            lim_min_kwh: 3,
            total_customers: 3,
            evaluation_customers: 3,
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    });