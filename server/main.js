const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const dotenv = require("dotenv");
const {readFileSync} = require("fs")
const schemaDirectives = require("./graphql/directives");
const typeDefs = gql(readFileSync('./graphql/schema.graphql').toString())
const resolvers = require('./graphql/resolvers')
const models = require('./models')
const authScope = require('./graphql/authScope')

dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives,
    context: (req) => ({
        ...req,
        authScope: authScope(req),
        models,
    }),
});

const app = express();
server.applyMiddleware({app});

const port = process.env.GRAPHQL_LISTEN_PORT || 3000
app.listen({port}, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);