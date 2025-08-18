import { messages } from "./dataSource.js";

export const messageQueryResolvers = {
  messages: async () => {
    await new Promise((resolve) => setTimeout(resolve), 2000);   // Simulate server loading state (2s delay)
    return messages;
  },
};
