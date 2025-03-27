import { Tuitor } from "../Models/Tuitor.js";
import { Video } from "../Models/Video.js";
import { client } from "../RedisSetUp/RedisSetup.js";
import { ApiError } from "../Utils/ApiError.js";
import asyncHandler from "../Utils/AsyncHandler.js";
import bcrypt from "bcrypt"




const tuitorRegister = asyncHandler( async (req, res) => {

  const { fullname , email, phone , image, password  } = req.body;

  if( !fullname || !email || !phone || !password  ) {
    throw new ApiError(400, "All Fields are required !!!! ")
  }

  //  now check  email is already exist or not 

  const existingtuitor = await Tuitor.findOne({email})

  if ( existingtuitor  )
  {
    throw new ApiError(400, "Email id is belongs to another tuitor. Please choose another ")
  }  

  //  hash password before save into database 

  const hashedPassword = await bcrypt.hash(password , 10)

  //  create tuitor for saving into database 

  const createdTuitor = new Tuitor({
    fullname,
    email,
    image,
    phone,
    password: hashedPassword,

  })

  //  generate refreshtoken for tuitor 

  const refreshtoken = createdTuitor.generateRefreshToken()

  if(!refreshtoken){
    throw new ApiError(400, "Something error occured. Refreshtoken is not generated ");
  }

  createdTuitor.refreshtoken = refreshtoken

  //  save tuitor into database 

  const savedtuitor = await createdTuitor.save()

  
  res
  .status(200)
  .json(savedtuitor)

})


const tuitorLogin = asyncHandler( async ( req, res) => {
   
  //  get authentication details ( email and password )

  const { email,password } = req.body;
  
  //  find tuitor by email 

  const tuitor = await Tuitor.findOne({email})


  //  check password is correct or not 

  const isValidatePassword = await tuitor.isPasswordCorrect(password)

  if(!isValidatePassword){
    throw new ApiError(400, "Invalid credentials !!! ")
  }

  //  generate refreshtoken and accesstoken for tuitor 

  const accessToken = tuitor.generateAccessToken()

  if(!accessToken){
    throw new ApiError(400, "Accesstoken error !!! ")
  }

  const refreshToken = tuitor.generateRefreshToken()

  if(!refreshToken){
    throw new ApiError(400, "RefreshToken error !!! ")
  }
  
  //  redis setup 

  await client.set(`refresh_token_tuitor:${tuitor._id}`, refreshToken,  "EX", 7 * 24 * 60 * 60)
  await client.set(`access_token_tuitor:${tuitor._id}`, accessToken ,  "EX",  15 * 60)


  const options = {
    httpOnly:true,
    secure:true,
    sameSite:"strict"
  }

  res
  .status(200)
  .cookie("accessTokenTuitor", accessToken, options)
  .cookie("refreshTokenTuitor", refreshToken, options)
  .send(accessToken)

})

const tuitorGetAllVideo = asyncHandler ( async ( req, res) =>{
 
  //  find id of current tuitor 

  const tid = req.tuitor._id;

  // find tuitor by id and all tuitor videos

  const tuitorVideo = await Tuitor.findById(tid).populate("video")

  if(!tuitorVideo) {
    throw new ApiError(400, "something error occured !!! ")
  }

  res.send(tuitorVideo.video)

})


const tuitoruploadvideo = asyncHandler ( async ( req, res) =>{

  // find current tuitor id 

  const tid = req.tuitor._id

  const currentTuitor = await Tuitor.findById(tid)

  if( !currentTuitor ){
    throw new ApiError(401, "unauthorised !!!! ")
  }

  //  fetch details 
   
  const { title, coverimage, videofile, batch} = req.body

  if(!title || !coverimage || !videofile   ){
    throw new ApiError(400, "All fields are required !!! ")
  }

  const createdVideo = new Video({
    title,
    coverimage,
    videofile,
    batch:currentTuitor._id,
    tuitor : currentTuitor._id
  })

 

  const savedVideo = await createdVideo.save()

  currentTuitor.video.push(savedVideo._id); 

  await currentTuitor.save()


  res
  .status(201)
  .send(savedVideo)

})

const getTuitorProfile = asyncHandler ( async ( req, res) =>{

  //  get id for logged in tuitor
    
  const tid = req.tuitor._id

  const currentTuitor = await Tuitor.findById(tid)

  if( !currentTuitor ){
    throw new ApiError(401, "unauthorised !!!! ")
  }
  
  res
  .status(200)
  .json(currentTuitor);
})

//  UPDATE PASSWORD SYSTEM 

const tuitorUpdatePassword = asyncHandler( async ( req, res) =>{
  
  const tid = req.tuitor._id

  console.log("Found tid : ", tid)

  const tuitor =  await Tuitor.findById(tid);

  console.log("Found tuitor : ", tuitor)

  if( !tuitor )
    throw new ApiError(400, "Tuitor not update !!! ")


  //  get password from body 
  
  const { password } = req.body
  
  if( !password )
    throw new ApiError(401, "Password is required if you want to update ")

  //  now hash the password 
  
  const hashedPassword = await bcrypt.hash(password , 10)

  tuitor.password = hashedPassword

  await tuitor.save()


  res.status(200).json({Updatedtuitor : tuitor})

})


//  find tuitor with tuitor id 

const getProfileById = asyncHandler ( async ( req, res) =>{

  const tid = req.params.id

  // now find tuitor by id 

  const tuitor = await Tuitor.findById( tid )

  if( ! tuitor) {
    throw new ApiError(404, "Tuitor not found with this id : ", tid)
  }

  res.status(200).json({tuitor: tuitor})

})


//  logout 


const tuitorLogout = asyncHandler ( async ( req, res) => {

  const tid = req.tuitor._id

  //  find tuitor 

  const tuitor = await Tuitor.findByIdAndUpdate(
    tid,
    {
      $unset:{
        refreshtoken:""
      }
    },{
      new:true
    }
  )
  
  // redis checking user accesstoken is blacklisted or not

  const refreshToken = await client.get(`refresh_token_tuitor:${tid}`)

  if(refreshToken){
    await client.set(`blacklist_refresh_tuitor:${refreshToken}`, "true", "EX", 7 * 24 * 60 * 60)
    await client.del(`refresh_token_tuitor:${tid}`)
  }
 
  const accessToken = await client.get(`access_token_tuitor:${tid}`)
  if(accessToken){
    await client.set(`blacklist_access_tuitor:${accessToken}`, "true", "EX", 15 * 60)
    await client.del(`access_token_tuitor:${tid}`)
  }
 
  res
  .status(200)
  .clearCookie("accessTokenTuitor")
  .clearCookie("refreshTokenTuitor")
  .send("Tuitor logged out successfully !!!   ")

})


//  update details 

const tuitorUpdateDetails = asyncHandler ( async ( req, res)=>{
 
  const tid = req.tuitor._id

  const { fullname , email, phone  } = req.body



  //  now find tuitor by id and update 

  const tuitor = await Tuitor.findByIdAndUpdate(
    tid,{
      $set:{
       fullname:fullname,
       email : email,
       phone:phone
      }
    },{
      new : true
    }
  )

  //  save into database 
  
  const updatedTuitor = await tuitor.save()
  
  if(updatedTuitor ){
    res.status(200)
    .json(updatedTuitor)
  }

  res.status(200)
  .send("Tuitor could not update !!! ")

})

//  update profile 

const updateImage = asyncHandler(async ( req, res)=>{
 
  const tid = req.tuitor._id


  const { image } = req.body

  const tuitor = await Tuitor.findById(tid)

  if(!tuitor){
    throw new ApiError(404, "Tuitor not found ... ")
  }

  tuitor.image = image

  const updatedTuitor = await tuitor.save()

  if( updatedTuitor){
    res.status(200)
    .json(updatedTuitor)
  }
  res.status(400)
  .send("Bad Request !! ")

})



export  { tuitorRegister , tuitorLogin , tuitorGetAllVideo, tuitoruploadvideo, getTuitorProfile , tuitorUpdatePassword , getProfileById,   tuitorLogout , tuitorUpdateDetails,  updateImage}