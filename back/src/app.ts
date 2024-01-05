/* import { ApolloServer, gql } from 'apollo-server'


type Agent = {
  id: string,
  name: string,
  link_logo: string,
  state_origin: string
  cost_kwh: number,
  lim_min_kwh: number,
  total_customers: number,
  evaluation_customers: number,
}

type ListOfAgents = Agent[]

const typeDefs = gql` 
  type Agent = {
    id: string,
    name: string,
    link_logo: string,
    state_origin: string
    cost_kwh: number,
    lim_min_kwh: number,
    total_customers: number,
    evaluation_customers: number,
  }

  type Query {
    listAgents: [Agent]
  }
`

export const app = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      listAgents: () => 'Hello World'
    },
  },
}) */