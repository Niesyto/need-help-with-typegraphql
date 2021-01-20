import 'reflect-metadata';
import Express from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import * as path from 'path';

// eslint-disable-next-line import/extensions
import { ChallengeResolver } from './Challenge/challenge-resolver';


const apiPath = '/graphql';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [   
      ChallengeResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),  
  });


  const app = Express();

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => {
      const context = {
        req,
      };
      return context;
    },
  });

  app.use(cors());

  apolloServer.applyMiddleware({ app, path: apiPath });

  app.listen({ port: 4000 }, () => {
    console.log(`server started on http://localhost:4000`);
  });
};

main();
