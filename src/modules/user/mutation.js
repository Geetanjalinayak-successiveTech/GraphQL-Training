import { userModel } from "../../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/auth.js";

export const userMutationResolvers = {
  createUser: async (_, { name, email, age }) => {
    const newUser = new userModel({ name, email, age });
    return await userModel.create(newUser);
  },

  updateUserByDb: async (_, { _id, name, email, age }) => {
    const updatedUser = await userModel.findByIdAndUpdate(
      _id,
      { name, email, age },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return updatedUser;
  },

  registerUser: async (_, { name, email, age, password, role }) => {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      age,
      password: hashedPassword,
      role,
    });
    return await userModel.create(newUser);
  },

  loginUser: async (_, { email, password }) => {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("user not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = generateToken(user);
    return { token, user };
  },

  deleteUSer: async (_, { id }) => {
    const user = await userModel.findOne({ id });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "admin") {
      // role based acess
      throw new Error("Unauthorized");
    }
    await userModel.findByIdAndDelete(id);
    return true;
  },
};
