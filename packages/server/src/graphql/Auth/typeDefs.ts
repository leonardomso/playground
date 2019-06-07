import gql from "graphql-tag";

const typeDefs = gql`
    type Auth {
        token: String
        errors: [Error]
    }
`;

export default typeDefs;
