import { gql } from 'apollo-server'

export const typeDefs = gql`
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
    fetchAgentsByMinKwh: [Agent]
  }
`