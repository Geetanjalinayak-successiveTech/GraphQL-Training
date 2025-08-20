
import pubsub from "../../server/pubsub.js";

export const subscriptionResolver={
    messageSent:{
       subscribe: ()=> pubsub.asyncIterableIterator(["MESSAGE_SENT"]),
    },

    userStatusChanged:{
        subscribe:()=>pubsub.asyncIterableIterator(["USER_STATUS_CHANGED"])
    }
}