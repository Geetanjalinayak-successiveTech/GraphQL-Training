import mongoose from "mongoose"

const messageSchema= new mongoose.Schema({
    content: {type:String, required:true},
    sender: {type:mongoose.Schema.Types.ObjectId, ref:"userModel"}
},
{timestamps:true});

const messageModel= mongoose.model("message", messageSchema)
export default messageModel;

