import { ApolloServer } from 'apollo-server'
import { typeDefs } from './models/agent-model'
import { fetchAgentsByMinKwhResolver } from './resolvers/fetch-agents-by-min-kwh-resolver'

export const app = new ApolloServer({
  typeDefs,
  resolvers: {
    ...fetchAgentsByMinKwhResolver,
  },
})