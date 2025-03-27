import mongoose from "mongoose";
const { Schema } = mongoose; 


const LectureSchema = new Schema({
 
  title:{
    type:String,
    require:true,
    trim:true,
    lowercase: true,
  },
  timing:{
      type:Date
  },
  tuitor:{
    type:Schema.Types.ObjectId,
    ref:"Tuitor"
  }

})

export const Lecture = mongoose.model("Lecture", LectureSchema);