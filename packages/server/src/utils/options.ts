const options = {
	port: process.env.PORT || "4000",
	endpoint: "/graphql",
	subscriptions: "/subscriptions",
	playground: "/playground",
	cors: {
		credentials: true,
		origin: ["http://localhost:3000"]
	}
};

export default options;
