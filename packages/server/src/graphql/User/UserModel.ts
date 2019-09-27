import { Document, Schema, Model, model } from "mongoose";
import { ObjectID } from "mongodb";

import { UserType } from "./UserType";

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      description: "User e-mail",
      trim: true,
      index: true,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      hidden: true,
      required: true
    },
    firstName: {
      type: String,
      description: "User first name",
      trim: true
    },
    lastName: {
      type: String,
      description: "User last name",
      trim: true
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    },
    collection: "User"
  }
);

export interface IUserModel extends UserType, Document {
  comparePassword(password: string): boolean;
}

const UserModel: Model<IUserModel> = model<IUserModel>("User", UserSchema);

export default UserModel;
