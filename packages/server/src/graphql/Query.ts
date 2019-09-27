import { objectType, stringArg, intArg } from "nexus";

import UserLoader from "./User/UserLoader";

const Query = objectType({
  name: "Query",
  definition(t) {
    t.field("currentUser", {
      type: "User",
      resolve: async (parent, args, { req }, info) => {
        return UserLoader.currentUser({ req })
          .then(user => user)
          .catch(err => err);
      }
    });

    t.field("getUser", {
      type: "User",
      args: {
        _id: stringArg({ nullable: false })
      },
      resolve: (parent, { _id }, context, info) => {
        return UserLoader.getUser({ _id })
          .then(user => user)
          .catch(err => err);
      }
    });

    t.list.field("getAllUsers", {
      type: "User",
      resolve: (parent, args, context, info) => {
        return UserLoader.getAllUsers()
          .then(user => user)
          .catch(err => err);
      }
    });
  }
});

export default Query;
