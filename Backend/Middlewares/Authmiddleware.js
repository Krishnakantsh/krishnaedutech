
import jwt from "jsonwebtoken"
import asyncHandler from "../Utils/AsyncHandler.js"
import { ApiError } from "../Utils/ApiError.js"
import { Student } from "../Models/Student.js"

import { client  } from "../RedisSetUp/RedisSetup.js"



export const verifyJWT = asyncHandler ( async ( req , res , next) =>{
    
    
    try {
    
    const token  = req.cookies?.accessTokenStudent || req.header("Authorization")?.replace("Bearer ", "")
    
    console.log("Front end send token : ",token)
    
    if(!token){
        throw new ApiError(401, "Unauthorized access !!!!")
    }
    
    const isBlackList = await client.get(`blacklist_access:${token}`)
    
    if(isBlackList){
        throw new ApiError(400, "You need to login access : Access Denied ")
    }
    
    const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET )
    
    const student = await Student.findById(decodedToken?._id).select(" -password -refreshToken")
    
    if( !student ){
        throw new ApiError(401, "Invalid access Tokenn ")
    }
    
   req.student = student;
  
   next()
  
} catch (error) {
    throw new ApiError(401 , error?.message || " Invalid access token ")
}
})