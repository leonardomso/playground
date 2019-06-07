import gql from "graphql-tag";

const typeDefs = gql`
    type Error {
        value: String!
    }
`;

export default typeDefs;
