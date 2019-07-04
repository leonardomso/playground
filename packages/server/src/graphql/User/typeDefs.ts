import gql from "graphql-tag";

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
    }

    type Query {
        getUser(_id: ID!): User!
        getAllUsers: [User!]!
    }

    type Mutation {
        signUpUser(email: String!, password: String!): Auth
        signInUser(email: String!, password: String!): Auth
    }
`;

export default typeDefs;
