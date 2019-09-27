import { objectType, stringArg } from "nexus";

import UserLoader from "./User/UserLoader";

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("signInUser", {
      type: "User",
      args: {
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false })
      },
      resolve: async (parent, { email, password }, { req }: any, info) => {
        return UserLoader.signInUser({ email, password, req })
          .then(user => user)
          .catch(err => err);
      }
    });

    t.field("signUpUser", {
      type: "User",
      args: {
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false })
      },
      resolve: async (parent, { email, password }, { req }: any, info) => {
        return UserLoader.signUpUser({ email, password, req })
          .then(user => user)
          .catch(err => err);
      }
    });

    t.field("logoutUser", {
      type: "Auth",
      resolve: async (parent, args, { req, res }: any, info) => {
        return UserLoader.logoutUser({ req, res });
      }
    });
  }
});

export default Mutation;
