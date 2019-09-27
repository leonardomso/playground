import { PubSub } from "graphql-yoga";

import { getUserId } from "./auth";

const pubsub = new PubSub();

export const context = async ({ request }) => {
  const token = request.headers.authorization
    ? request.headers.authorization
    : "";
  const currentUser = await getUserId(token);
  return { currentUser, pubsub };
};
