const {
    ForbiddenError,
    SchemaDirectiveVisitor,
} = require("apollo-server-express");
const { defaultFieldResolver } = require("graphql");
const errors = require('./errors')
const { ADMIN } = require('./roles')

class isAdmin extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const originalResolve = field.resolve || defaultFieldResolver;
        field.resolve = async function (...args) {
            const context = args[2];
            const { authScope } = context

            if (!authScope) {
                throw new ForbiddenError(errors.ERROR_NOT_LOGGED_IN);
            }

            if (authScope.role !== ADMIN) {
                throw new ForbiddenError(errors.ERROR_NOT_ADMIN);
            }

            return await originalResolve.apply(this, args);
        };
    }
}

module.exports = { isAdmin };