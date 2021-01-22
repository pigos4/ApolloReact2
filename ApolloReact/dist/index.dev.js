"use strict";

var _require = require('apollo-server'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var resolvers = require("./resolvers/resolvers");

var typeDefs = require('./resolvers/schema');

var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
server.listen({
  port: process.env.PORT || 4000
}).then(function (_ref) {
  var url = _ref.url;
  console.log("graphQL running at ".concat(url));
});