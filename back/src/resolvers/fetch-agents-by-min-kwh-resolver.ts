import { getListOfAgentsByMinKwh } from "@/services/get-list-of-agents-by-min-kwh";

export const fetchAgentsByMinKwhResolver = {
    Query: {
        fetchAgentsByMinKwh: async () => {
            const listOfAgents = await getListOfAgentsByMinKwh();

            return listOfAgents;
        }
    }
};

