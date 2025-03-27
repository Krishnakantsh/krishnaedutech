
import jwt from "jsonwebtoken"
import asyncHandler from "../Utils/AsyncHandler.js"
import { ApiError } from "../Utils/ApiError.js"
import { Tuitor } from "../Models/Tuitor.js"
import { client } from "../RedisSetUp/RedisSetup.js"


export const verifyJWTForTuitor = asyncHandler ( async ( req , res , next) =>{

   const token  = req.cookies?.accessTokenTuitor || req.header("Authorization")?.replace("Bearer ", "")

   if(!token){
    throw new ApiError(401, "Unauthorized access !!!!")
   }
  
  
//     redis acceestoken status checking black listed or not 

const isAccessBlacklisted = await client.get(`blacklist_access_tuitor:${token}`)

if(isAccessBlacklisted){
    throw new ApiError(401,"Session Expired ! Please login again !!!!! ")
}

   // verify token

 try {

   const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET )
  
   const tuitor = await Tuitor.findById(decodedToken?._id).select(" -password -refreshToken")
  
   if( !tuitor ){
    throw new ApiError(401, "Invalid access Token ")
   }
  
   req.tuitor = tuitor;
  
   next()
  
} catch (error) {
    throw new ApiError(401 , error?.message || " Invalid access token ")
}
})