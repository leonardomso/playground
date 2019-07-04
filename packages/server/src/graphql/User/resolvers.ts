import UserConnector from "../../connectors/User/User";

const resolvers = {
    Query: {
        getUser: async (parent, { _id }, context, info) => {
            return UserConnector.getUser({ _id })
                .then(user => user)
                .catch(err => err);
        },
        getAllUsers: async (parent, args, context, info) => {
            return UserConnector.getAllUsers()
                .then(users => users)
                .catch(err => err);
        }
    },
    Mutation: {
        signUpUser: async (parent, { email, password }, context, info) => {
            const errors = [];

            return UserConnector.signUpUser({ email, password })
                .then(token => ({
                    token,
                    errors
                }))
                .catch(err => {
                    if (err.message) {
                        errors.push({ value: err.message });
                        return { token: null, errors };
                    }

                    throw new Error(err);
                });
        },
        signInUser: async (parent, { email, password }, context, info) => {
            const errors = [];

            return UserConnector.signInUser({ email, password })
                .then(token => ({
                    token,
                    errors
                }))
                .catch(err => {
                    if (err.message) {
                        errors.push({ value: err.message });
                        return { token: null, errors };
                    }

                    throw new Error(err);
                });
        }
    }
};

export default resolvers;
