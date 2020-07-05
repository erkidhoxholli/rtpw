import { ApolloError } from 'apollo-client';
import { GraphQLError } from 'graphql';

interface GithubGraphQLError extends GraphQLError {
    type: string;
}
export const doesUserExist = (error: ApolloError) =>
    !error?.graphQLErrors?.find((err: GithubGraphQLError) => err.type === 'NOT_FOUND');
