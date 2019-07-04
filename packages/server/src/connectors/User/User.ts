import User from "../../models/User/";

import isEmail from "validator/lib/isEmail";
import {
    createToken,
    verifyToken,
    encryptPassword,
    comparePassword
} from "../../utils/auth";

const UserConnector = {
    getUser: async ({ _id }) => {
        return await User.findById(_id)
            .populate("users")
            .then(user => user)
            .catch(err => err);
    },
    getAllUsers: async () => {
        return await User.find()
            .populate("users")
            .then(users => users)
            .catch(err => err);
    },
    signUpUser: async ({ email, password }) => {
        return new Promise((resolve, reject) => {
            // Validate the data
            if (!email) {
                return reject({ message: "You must provide a email." });
            } else if (!isEmail(email)) {
                return reject({ message: "You must provide a valid email." });
            }

            if (!password) {
                return reject({ message: "You must provide a password." });
            }

            return encryptPassword(password, (err, hash) => {
                if (err) {
                    return reject(
                        new Error("The password could not be hashed.")
                    );
                }

                return User.create(
                    Object.assign({ email, password }, { password: hash })
                )
                    .then(user => {
                        resolve(
                            createToken({ _id: user._id, email: user.email })
                        );
                    })
                    .catch(err2 => {
                        if (err2.code === 11000) {
                            return reject({
                                message:
                                    "There is already a user with this email."
                            });
                        }

                        return reject(err2);
                    });
            });
        });
    },
    signInUser: async ({ email, password }) => {
        return new Promise((resolve, reject) => {
            // Validate the data
            if (!email) {
                return reject({ message: "You must provide a email." });
            } else if (!isEmail(email)) {
                return reject({ message: "You must provide a valid email." });
            }
            if (!password) {
                return reject({ message: "You must provide a password." });
            }

            // Find the user
            return User.findOne({ email })
                .then(user => {
                    if (!user) {
                        return reject({
                            message: "Authentication failed. User not found."
                        });
                    }

                    return comparePassword(
                        user.password,
                        password,
                        (err, isMatch) => {
                            if (err) {
                                return reject(err);
                            }
                            if (!isMatch) {
                                return reject({ message: "Wrong password." });
                            }

                            return resolve(
                                createToken({
                                    _id: user._id,
                                    email: user.email
                                })
                            );
                        }
                    );
                })
                .catch(err => reject(err));
        });
    },
    isAuthenticated({ token }) {
        return new Promise((resolve, reject) => {
            if (!token) {
                return reject({ message: "The user token is empty." });
            }

            return verifyToken(token, (err, decoded) => {
                if (err) {
                    return reject({ message: "You must be authenticated." });
                }

                return resolve(decoded);
            });
        });
    }
};

export default UserConnector;
