import { compare } from "bcrypt";
import { UserError } from "graphql-errors";

import UserModel from "./UserModel";

const UserLoader = {
  currentUser: async ({ req }) => {
    if (!req.session.userId) {
      return null;
    }
    const currentUser = UserModel.findById(req.session.userId);
    return currentUser;
  },
  getUser: async ({ _id }) => {
    return await UserModel.findById(_id)
      .populate("users")
      .then(user => user)
      .catch(err => err);
  },
  getAllUsers: async () => {
    return await UserModel.find()
      .populate("users")
      .then(users => users)
      .catch(err => err);
  },
  signInUser: async ({ email, password, req }) => {
    const user = await UserModel.findOne({ email });
    if (!user) throw new UserError("No user with that email!");

    return compare(password, user.password)
      .then(result => {
        if (result) {
          req.session.userId = user.id;

          return user;
        } else {
          throw new UserError("Incorrect password");
        }
      })
      .catch(err => console.error(err));
  },
  signUpUser: async ({ email, password, req }) => {
    const currentUser = await UserModel.findOne({ email });
    if (currentUser) throw new UserError("User already exists!");

    const user = await new UserModel({
      email,
      password
    }).save();

    req.session.userId = user.id;

    return user;
  },
  logoutUser: async ({ req, res }) => {
    await new Promise(res => req.session.destroy(() => res()));
    res.clearCookie("connect.sid");
    return true;
  }
};

export default UserLoader;
