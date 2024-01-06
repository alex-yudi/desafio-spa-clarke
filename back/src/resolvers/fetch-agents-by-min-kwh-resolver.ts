import { AgentModel } from "@/models/agent-model";
import { getListOfAgentsByMinKwh } from "@/services/get-list-of-agents-by-min-kwh";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver(AgentModel)
export class FetchAgentsByMinKwhResolver {

    @Query(returns => [AgentModel])
    async fetchAgentsByMinKwh(
        @Arg("lim_min_kwh", type => Number)
        lim_min_kwh: number
    ): Promise<AgentModel[]> {

        if (lim_min_kwh <= 0) {
            throw new Error("The value of lim_min_kwh must be greater than 0");
        }
        const listOfAgents = await getListOfAgentsByMinKwh();

        console.log(lim_min_kwh)
        return listOfAgents;
    }
}
