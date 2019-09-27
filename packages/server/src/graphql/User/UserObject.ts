import { objectType } from "nexus";

const UserObject = objectType({
  name: "User",
  definition(t) {
    t.id("_id");
    t.string("email");
    t.string("firstName");
    t.string("lastName");
  }
});

export default UserObject;
