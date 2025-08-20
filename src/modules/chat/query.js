import { userModel } from "../../models/userModel.js";
import chatModel from "../../models/chatModel.js";


export const chatQueryResolver={
    //show chats Query
    chats: async () => {return await chatModel.find()},

    // //show users Query
    // showUsers: async()=> {return await userModel.find()},

    // // show users by ID query
    // showUserById: async(_,{id})=> {
    //     const user= userModel.findById(id);
    //     if(!user)
    //     {
    //         throw new Error("User not found")
    //     }

    //     return user;
  






}