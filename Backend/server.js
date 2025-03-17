import express from "express";
import {PORT} from "./Constant.js"

const app = express();


app.get("/test" , (req, res)=>{
  res.send(" Your service is working ");
})


app.listen(PORT || 8282 , ()=>{
  console.log(`Your server is running at : http://localhost/${PORT} `);
})