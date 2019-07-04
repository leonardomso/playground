import { PubSub } from "graphql-yoga";

import { models } from "./models";
import { getToken } from "./auth";

const pubsub = new PubSub();

export const context = ({ request }) => ({
    models,
    pubsub,
    token: getToken(request)
});
