import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFiles } from '@graphql-tools/load-files';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs: await loadFiles('src/books.graphql'),
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);
