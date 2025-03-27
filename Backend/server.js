
import { PORT } from "./constant.js";
import dotenv from "dotenv"
import connectDB from "./DatabaseConnection/DbConnection.js";
import { app } from "./App/app.js";

dotenv.config({
  path:"./.env"
})

app.get("/test" , (req, res)=>{
  res.send(" Your service is working ");
})



// database connection ......................
connectDB();


app.listen(PORT || 8282 , ()=>{
  console.log(`Your server is running at : http://localhost:${PORT} `);
})






