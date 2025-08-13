import { messageModule } from "../modules/message/index.js";

export const resolvers = {
  Query: {
    ...messageModule.query,
  },
  Mutation: {
    ...messageModule.mutaion
  },
};
