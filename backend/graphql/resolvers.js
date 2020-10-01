const neo4jGRAPHQL = require('neo4j-graphql-js').neo4jgraphql;

const resolvers = {
    Query: {
        Movie(object, params, ctx, resolveInfo) {
            return neo4jGRAPHQL(object, params, ctx, resolveInfo);
        }
    }
};

module.exports = {
    resolvers
}