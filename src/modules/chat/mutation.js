import { userModel } from "../../models/userModel.js";

import chatModel from "../../models/chatModel.js";
export const chatMutationResolver = {
//   userCreation: async (_, { name, email, age }) => {
//     const newUser = new userModel({ name, email, age });
//     return await userModel.create(newUser);
//   },

  sendMessage: async (_, { content, sender }, { pubsub }) => {
    const message = await chatModel.create({ content, sender });
    await message.populate("sender");

    const payload = {
      id: message._id.toString(),
      content: message.content,
      sender: message.sender,
      createdAt: message.createdAt.toISOString(),
    };

    await pubsub.publish("MESSAGE_SENT", { messageSent: payload });
    return payload;
  },

  setUserOnline: async (_, { id }, { pubsub }) => {
    const user = await userModel.findByIdAndUpdate(
      id,
      { isOnline: true },
      { new: true }
    );
    await pubsub.publish("USER_STATUS_CHANGED", { userStatusChanged: user });
    return user;
  },
  setUserOffline: async (_, { id }, { pubsub }) => {
  const user = await userModel.findByIdAndUpdate(
    id,
    { isOnline: false },
    { new: true }
  );
  await pubsub.publish("USER_STATUS_CHANGED", { userStatusChanged: user });
  return user;
}

};

