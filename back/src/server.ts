import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP Server running port ${env.PORT}`)
  })


/* 
import 'reflect-metadata'
import { env } from './env'

import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { FetchAgentsResolver } from './resolvers/fetch-agents-resolver'

export async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      FetchAgentsResolver
    ],
  })

  const server = new ApolloServer({
    schema,
  })

  server
    .listen({
      host: '0.0.0.0',
      port: env.PORT,
    })
    .then(() => {
      console.log(`🚀 HTTP Server running port ${env.PORT}`)
    })

}

bootstrap() */