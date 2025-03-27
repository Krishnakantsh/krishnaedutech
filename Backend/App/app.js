import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser"
import studentRouter from "../Routes/StudentRouter.js";
import tuitorRouter from "../Routes/TuitorRouter.js";
import adminRouter from "../Routes/AdminRouter.js";

const app = express();

//  cors control 

app.use(cors({
  credentials:true,
  origin:process.env.CORS_ORIGIN,
}))


// url manipulation 

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.use(express.json())

app.use(cookieParser());

//  common student router 

app.use("/api/v2s/", studentRouter);

//  common router for admin

app.use("/api/v2m/", adminRouter);

//  common router for tuitor 

app.use("/api/v2t/", tuitorRouter);



export { app } ;

