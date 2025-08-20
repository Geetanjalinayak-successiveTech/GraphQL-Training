import { userModel } from "../../models/userModel.js";

export const userQueryResolvers = {
  users: async (_, _args, context) => {
    if (!context.user) {
      throw new Error("Unauthorized");
    }
    if (context.user.role !== "ADMIN")
      throw new Error("Forbidden: Admins only");   // Role based acess control

    return userModel.find();
  },

  usersByID: async (_, { id }, context) => {
    if (!context.user) {
      throw new Error("Unauthorized");
    }
    const user = await userModel.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },
};
