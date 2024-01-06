/* 
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
*/
import "reflect-metadata";

import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { env } from './env'
import { FetchAgentsByMinKwhResolver } from "./resolvers/fetch-agents-by-min-kwh-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [FetchAgentsByMinKwhResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(env.PORT);
  console.log(`Server is running, GraphQL available at ${url}`);
}

bootstrap();