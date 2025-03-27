import mongoose, { Types } from "mongoose"
import {authMethod} from "../AuthMethods/AuthMethod.js";
const { Schema } = mongoose; 

const StudentSchema = new Schema({

firstname:{
  type: String,
  required: true,
  lowercase: true,
  trim: true,
  index: true,
},
lastname:{
  type: String,
  required: true,
  lowercase: true,
  trim: true,
  index: true,
},
email:{
  type: String,
  required: true,
  unique: true,
  lowercase: true,
  trim: true,
  index: true,
},
phone:{
  type: String,
  required: true,
  lowercase: true,
  trim: true,
  index: true,
},
password:{
  type: String,
  required: true,
  trim: true,
  index: true,
},
refreshtoken:{
  type:String
},
image:{
  type: String,
},
batch:[{
  type: Schema.Types.ObjectId,
  ref: "Batch",
},
],
batchhistory:[
  {
    type: Schema.Types.ObjectId,
    ref: "Batch",
  },
],
registerat:{
  type: String,
  lowercase: true,
  trim: true,
  index: true,
},
fathername:{
  type: String,
  lowercase: true,
  trim: true,
  index: true,
},
address:{
  type: String,
  lowercase: true,
  trim: true,
  index: true,
},
progress:[
  {
    type: Schema.Types.ObjectId,
    ref: "Process",
  },
],
savedvideo:[
  {
    type: Schema.Types.ObjectId,
    ref: "Video",
  },
],
savedfile:[
  {
    type: Schema.Types.ObjectId,
    ref: "Files",
  }
],
status:{
  type:String
}

},
{ timestamps: true }
)

StudentSchema.methods.isPasswordCorrect = authMethod.isPasswordCorrect;
StudentSchema.methods.generateAccessToken = authMethod.generateAccessToken;
StudentSchema.methods.generateRefreshToken = authMethod.generateRefreshToken;



export const Student = mongoose.model("Student" , StudentSchema );