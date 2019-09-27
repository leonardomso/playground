import { makeSchema } from "nexus";
import path from "path";

import Query from "./Query";
import Mutation from "./Mutation";

import User from "./User";
import Auth from "./Auth";

const ALL_TYPES = [
  Query,
  Mutation,
  User,
  Auth
];

const schema = makeSchema({
  types: ALL_TYPES,
  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "/generated/typings.ts")
  },
  nonNullDefaults: {
    input: false,
    output: false
  }
});

export default schema;
