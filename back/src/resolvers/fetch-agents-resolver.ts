import { Resolver, Query } from 'type-graphql';
import { Agent } from '@/@types/agent';

const teste = [
    {
        id: "1",
        name: "Teste",
        link_logo: "Teste",
        state_origin: "Teste",
        cost_kwh: 1,
        lim_min_kwh: 1,
        total_customers: 1,
        evaluation_customers: 1,
    },
    {
        id: "2",
        name: "Teste2",
        link_logo: "Teste2",
        state_origin: "Teste2",
        cost_kwh: 2,
        lim_min_kwh: 2,
        total_customers: 2,
        evaluation_customers: 2,
    },
]

@Resolver()
export class FetchAgentsResolver {
    @Query(() => String)
    async listAgents(): Promise<Agent[]> {
        return teste;
    }
}