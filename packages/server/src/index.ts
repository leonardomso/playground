require("dotenv").config();

import http from "http";
import express from "express";
import session from "express-session";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import uuid from "uuid/v4";
import cors from "cors";

import schema from "./graphql/";

const { NODE_ENV, API_URI, API_SECRET, PORT } = process.env;

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true
};

const server = new ApolloServer({
  schema,
  context: ({ req, res }: any) => ({ req, res }),
  tracing: true,
  cacheControl: false,
  playground: {
    settings: {
      "request.credentials": "same-origin"
    }
  }
});

// Connect to MongoDB with Mongoose.
mongoose
  .connect(API_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(
  session({
    genid: () => uuid(),
    secret: API_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

server.applyMiddleware({ app, cors: corsOptions });

const httpServer = http.createServer(app);

httpServer.listen({ port: PORT }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
});
