import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/resolvers";

const resolvers = [User];

export default mergeResolvers(resolvers);
