import dotenv from "dotenv"
dotenv.config()
import jwt from "jsonwebtoken"




export const generateToken=(user)=>{

return jwt.sign({_id:user._id, email:user.email},process.env.SECRET_KEY);
}

export const verifyToken= (token)=>{
    try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch {
    return null;
  }

}


