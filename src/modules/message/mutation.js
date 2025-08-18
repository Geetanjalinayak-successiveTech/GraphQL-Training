import { messages } from "./dataSource.js";

export const messageMutationResolvers = {
  postMessage: async (_, { content, author }) => {
    await new Promise((resolve)=> setTimeout(resolve),2000);
    const newMessage = {
      id: String(messages.length + 1),
      content,
      author,
      createdAt: new Date().toISOString(),
    };
    messages.push(newMessage);
    return newMessage;
  },
};