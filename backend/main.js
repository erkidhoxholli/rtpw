const neo4jGRAPHQL = require('neo4j-graphql-js');
const neo4jDriver = require('neo4j-driver');
const ApolloServer = require('apollo-server').ApolloServer;
const dotenv = require("dotenv");
const { readFileSync } = require('fs')


dotenv.config();

const typeDefs = readFileSync('./graphql/typeDefs.graphql').toString()
const resolvers = require("./graphql/resolvers").resolvers;
const schema = neo4jGRAPHQL.makeAugmentedSchema({typeDefs, resolvers});
/*
* https://grandstack.io/docs/neo4j-graphql-js/
*
* */
const driver = neo4jDriver.driver(
    process.env.NEO4J_URI,
    neo4jDriver.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);

const server = new ApolloServer({schema, context: {driver}});

server.listen(process.env.GRAPHQL_LISTEN_PORT, '0.0.0.0').then(({url}) => {
    console.log(`GraphQL API ready at ${url}`);
});