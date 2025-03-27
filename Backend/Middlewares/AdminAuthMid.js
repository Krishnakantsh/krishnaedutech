
import jwt from "jsonwebtoken"
import asyncHandler from "../Utils/AsyncHandler.js"
import { ApiError } from "../Utils/ApiError.js"
import { Admin } from "../Models/Admin.js"
import { client } from "../RedisSetUp/RedisSetup.js"



export const verifyJWTadmin = asyncHandler ( async ( req , res , next) =>{


try {
  
   const token  = req.cookies?.accessTokenAdmin || req.header("Authorization")?.replace("Bearer ", "")
  
   if(!token){
    throw new ApiError(401, "Unauthorized access !!!!")
   }

//    ckeck access is blacklisted or not 

const isAccessStatus = await client.get(`blacklist_access_admin:${token}`)
if(isAccessStatus){
    throw new ApiError(400, "Session expired! Please login again")
}
  
   // verify token
  
   const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET )
  
   const admin = await Admin.findById(decodedToken?._id).select(" -password -refreshToken")
  
   if( !admin ){
    throw new ApiError(401, "Invalid access Token ")
   }
  
   req.admin = admin;
  
   next()
  
} catch (error) {
    throw new ApiError(401 , error?.message || " Invalid access token ")
}
})