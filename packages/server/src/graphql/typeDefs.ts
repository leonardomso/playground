import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/typeDefs";
import Auth from "./Auth/typeDefs";
import Error from "./Error/typeDefs";

const typeDefs = [User, Auth, Error];

export default mergeTypes(typeDefs);
