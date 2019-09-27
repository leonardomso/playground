import { objectType } from "nexus";

const Auth = objectType({
  name: "Auth",
  definition(t) {
    t.string("token");
  }
});

export default Auth;