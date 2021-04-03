const {
  ApolloServer,
  gql
} = require('apollo-server');
const resolvers = require("./resolvers/resolvers");
const typeDefs = require('./resolvers/schema');


const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({
  port: process.env.PORT || 5000
}).then(({
  url
}) => {
  console.log(`graphQL running at ${url}`);
});