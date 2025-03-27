import mongoose from "mongoose";
const { Schema } = mongoose; 


const FilesSchema = new Schema({
 
  title:{
    type:String,
    require:true
  },
  image:{
    type:String
  },
  file:{
    type:String,
  },
  tuitor:{
    type:Schema.Types.ObjectId,
    ref:"Tuitor"
  }

},
{ timestamps: true }
)

export const Files = mongoose.model("Files" , FilesSchema);

