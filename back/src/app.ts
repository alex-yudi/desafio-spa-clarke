import { ApolloServer } from 'apollo-server'
import { typeDefs } from './models/agent-model'
import { fetchAgentsResolver } from './resolvers/fetch-agents-resolver'

export const app = new ApolloServer({
  typeDefs,
  resolvers: {
    ...fetchAgentsResolver,
  },
})