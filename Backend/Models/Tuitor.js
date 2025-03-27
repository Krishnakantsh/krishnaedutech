import mongoose, { Types } from "mongoose"
import {authMethod} from "../AuthMethods/AuthMethod.js";
const { Schema } = mongoose; 


const TuitorSchema = new Schema({

  fullname:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique:true
  },
  phone:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  image:{
    type: String,
  },
  refreshtoken:{
    type: String,
  },
  skills:[
    {
      type:String,
    }
  ],
  video:[
    {
      type: Schema.Types.ObjectId,
      ref:"Video"
    }
  ],
  attendence:[
    {
      type: Schema.Types.ObjectId,
      ref:"Attendence"
    }
  ],
  lectureschedule:[
    {
      type: Schema.Types.ObjectId,
      ref:"Lectures"
    }
  ],
  status:{
    type:String
  }
});

TuitorSchema.methods.isPasswordCorrect = authMethod.isPasswordCorrect;
TuitorSchema.methods.generateAccessToken = authMethod.generateAccessToken;
TuitorSchema.methods.generateRefreshToken = authMethod.generateRefreshToken;

export const Tuitor = mongoose.model( "Tuitor" , TuitorSchema );
