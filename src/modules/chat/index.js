import { chatQueryResolver } from "./query.js";
import { chatMutationResolver } from "./mutation.js";
import { subscriptionResolver } from "./subscription.js";



export const chatModule={
    query: chatQueryResolver,
    mutation: chatMutationResolver,
    subscription: subscriptionResolver
}

