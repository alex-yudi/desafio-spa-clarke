import 'reflect-metadata'

import { Resolver, Query, ObjectType, Field, ID } from 'type-graphql';

const teste = [
    {
        id: 1,
        name: "Teste",
        link_logo: "Teste",
        state_origin: "Teste",
        cost_kwh: 1,
        lim_min_kwh: 1,
        total_customers: 1,
        evaluation_customers: 1,
    },
    {
        id: 2,
        name: "Teste2",
        link_logo: "Teste2",
        state_origin: "Teste2",
        cost_kwh: 2,
        lim_min_kwh: 2,
        total_customers: 2,
        evaluation_customers: 2,
    },
]

@ObjectType()
class Agent {
    @Field(type => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    link_logo: string;

    @Field()
    state_origin: string;

    @Field()
    cost_kwh: number;

    @Field()
    lim_min_kwh: number;

    @Field()
    total_customers: number;

    @Field()
    evaluation_customers: number;
}

@Resolver()
export class FetchAgentsResolver {
    constructor() { }

    @Query(returns => [Agent])
    async listAgents() {
        return await teste;
    }
}