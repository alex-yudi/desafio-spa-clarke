import { ApolloServer, gql } from 'apollo-server'

type Agent = {
  id: number,
  name: string,
  link_logo: string,
  state_origin: string
  cost_kwh: number,
  lim_min_kwh: number,
  total_customers: number,
  evaluation_customers: number,
}


const teste: Agent[] = [
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

const typeDefs = gql`
  type Agent {
    id: ID!
    name: String!
    link_logo: String!
    state_origin: String!
    cost_kwh: Int!
    lim_min_kwh: Int!
    total_customers: Int!
    evaluation_customers: Int!
  }

  type Query {
    agents: [Agent]
  }
`

export const app = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      agents: () => {
        return teste
      }
    },
  },
})