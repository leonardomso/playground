require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";

import schema from "./graphql/";

import { options } from "./utils/options";
import { context } from "./utils/context";

// Connect to MongoDB with Mongoose.
mongoose
    .connect(process.env.URI, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const server = new GraphQLServer({
    schema,
    context
});

server.start(options, ({ port }) => {
    console.log(
        `🚀 GraphQL Server with TypeScript is running on http://localhost:${port}/playground`
    );
});
