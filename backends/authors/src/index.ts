import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFiles } from '@graphql-tools/load-files';

const authors = [
  {
    name: 'Kate Chopin',
    born: 'February 8, 1850',
  },
  {
    name: 'Paul Auster',
    born: 'February 3, 1947',
  },
];

const resolvers = {
  Query: {
    authors: () => authors,
  },
};

const server = new ApolloServer({
  typeDefs: await loadFiles('src/authors.graphql'),
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);
