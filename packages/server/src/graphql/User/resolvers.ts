const resolvers = {
	Query: {
		getAllUsers: async (parent, args, context, info) => {}
	},
	Mutation: {
		signUpUser: async (parent, { name, email }, context, info) => {},
	}
};

export default resolvers;
