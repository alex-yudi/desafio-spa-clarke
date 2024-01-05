import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Agent {
    @Field()
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