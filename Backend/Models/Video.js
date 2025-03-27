import mongoose from "mongoose";
const { Schema } = mongoose; 


const VideoSchema = new Schema({
 
  title:{
    type:String,
    require:true,
  },
  coverimage:{
    type:String,
    require:true,
  },
  videofile:{
    type:String,
    require:true
  },
  batch:[
    {
      type:Schema.Types.ObjectId,
      ref:"Batch"
   }
  ],
  tuitor:{
    type:Schema.Types.ObjectId,
    ref:"Tuitor"
  },
  duration: {
    type: String, 
  },
  views: {
    type: Number,
    default: 0,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },

},
{ timestamps: true }
)

export const Video = mongoose.model("Video" , VideoSchema);

