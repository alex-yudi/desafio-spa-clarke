import { getListOfAgents } from "@/services/get-list-of-agents";

export const fetchAgentsResolver = {
    Query: {
        fetchAgents: async () => {
            const listOfAgents = await getListOfAgents();

            return listOfAgents;
        }
    }
};

