import mongoose, { Types } from "mongoose"
import {authMethod} from "../AuthMethods/AuthMethod.js";
const { Schema } = mongoose; 

const AdminSchema = new Schema({
 
  phone:{
    required: true,
    unique: true,
    trim: true,
    index: true,
    type:String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  password: {
    type: String,
    required: [true, "Password is required "],
  },
  refreshtoken:{
    type:String
  }
})




AdminSchema.methods.isPasswordCorrect = authMethod.isPasswordCorrect;
AdminSchema.methods.generateAccessToken = authMethod.generateAccessToken;
AdminSchema.methods.generateRefreshToken = authMethod.generateRefreshToken;


export const Admin = mongoose.model("Admin" , AdminSchema);
