import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    Id: {type:String},
    name: {type:String , required:true},
    email: {type:String, required:true, unique:true },
    age:{type:Number, required: true},
    password:{type:String, required:true},
    role:{type:String, enum:["admin", "user"], default:"user"},
    isOnline: {type:String, default:false}
})

export const userModel= mongoose.model("userModel", userSchema)