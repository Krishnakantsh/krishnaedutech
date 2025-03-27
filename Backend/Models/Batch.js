import mongoose  from "mongoose";
const { Schema } = mongoose; 

const BatchSchema = new Schema({

  batchname:{
    type:String,
    require:true,
  },
  startdate:{
    type:Date,
    require:true
  },
  duration:{
    type:String, 
  },
  expiredate:{
    type:Date,
    require:true
  },
  students:[
    {
      type:Schema.Types.ObjectId,
      ref:"Student"
    }
  ],
  tuitor:[
    {
       type:Schema.Types.ObjectId,
      ref:"Tuitor"
    }
  ],
  actualprice:{
    type:String,
    require:true
  },
  discountprice:{
    type:String,
    require:true
  },
  discount:{
    type:String,
    require:true
  },
  image:{
    type:String,
    require:true
  },
  hightlight:[
    {
      type:String,
    }
  ],
  description:{
    type:String,
  },
  video:[
    {
      type:Schema.Types.ObjectId,
      ref:"Video"
   }
  ],
  files:[
    {
      type:Schema.Types.ObjectId,
      ref:"Files"
   }
  ]
},
{ timestamps: true }
)


export const Batch = mongoose.model("Batch" , BatchSchema );