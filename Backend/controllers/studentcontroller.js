import  asyncHandler  from "../Utils/AsyncHandler.js";
import { Student } from "../Models/Student.js";
import {  ApiError }  from "../Utils/ApiError.js"
import bcrypt from "bcrypt";
import { Batch } from "../Models/Batch.js";
import { client } from "../RedisSetUp/RedisSetup.js";


const registerstudent = asyncHandler( async (req, res) =>{

  const {  firstname, lastname, email, phone, password, image   } = req.body;

  if( !firstname || !lastname || !email || !phone || !password || !image ){

    throw new ApiError(400, "All fields are required ");

  }

  const existemail = await Student.findOne({email})

  if(  existemail ) {
    throw new ApiError(400, "Email id is already exist. Choose another .. ");
  }

  const hpassword = await bcrypt.hash(password, 10)

  console.log("Hashed Password Before Saving:", hpassword); // Debugging line
  
  const newStudent = new Student({
    firstname,
    lastname,
    email,
    phone,
    password : hpassword, 
    image,
  });


  //  generate refresh token 

  const refreshtoken = newStudent.generateRefreshToken();

  newStudent.refreshtoken = refreshtoken;

  const createdstudent = await newStudent.save();

  //  safe data send 
  const data = await Student.findById(createdstudent._id);

  res.status(201).json(data);
}
);


const getProfile = asyncHandler(async (req, res) =>{

  const { id } = req.params;

  const student = await Student.findById(id);

  if(!student){
    throw new ApiError(404, "Student not found with this id : ", _id);
  }

  res.status(200).json(student);

})


const loginstudent = asyncHandler( async (req, res) =>{

//   fetch data from request body 

const { email,  password } = req.body;

//  find student 

const student = await Student.findOne({email})

if( !student){
  throw new ApiError(404, "Student not found");
}

const isvalidatePassword = await student.isPasswordCorrect(password);

if(!isvalidatePassword){
  throw new ApiError(400, "Invalid Credentials ......");
}

// generate refreshtoken and accesstoken 

const refreshtoken = await student.generateRefreshToken();

if(!refreshtoken){
  throw new ApiError(400, "Refresh Token does not generate .....");
}


const accesstoken = await student.generateAccessToken();

if(!accesstoken){
  throw new ApiError(400, "Access Token does not generate .....");
}

// Store refresh token in Redis
await client.set(`refresh_token:${student._id}`, refreshtoken, "EX", 7 * 24 * 60 * 60); // Expiry: 7 day
// Store refresh token in Redis
await client.set(`access_token:${student._id}`, accesstoken, "EX", 24 * 60 * 60); // Expiry: 24h minute


const options = {
  httpOnly:true,
  secure:true
}

 
res
.status(201)
.cookie("accessTokenStudent", accesstoken, options)
.cookie("refreshTokenStudent", refreshtoken , options)
.send(accesstoken);
});


//  get course details 

const getMyCourseDetails = asyncHandler ( async ( req, res) =>{

  try {
    // Step 1: Get the logged-in student's ID from `req.user` (Assuming authentication middleware sets it)

    const sid = req.student._id;


    if (!sid) {
      throw new ApiError(401, "Unauthorized: No student ID found.");
    }

    
    // Step 2: Find the student and populate their courses
    const student = await Student.findById(sid).populate("batch");

    if (!student) {
      throw new ApiError(404, "Student not found.");
    }

    // Step 3: Send the course details
    res.status(200).json({ batch: student.batch });
    
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }

})


//  updatedetails for student 

const updatedetails = asyncHandler( async (req,res)=>{

  const sid = req.student._id;

  const { firstname, lastname, email, phone,image } = req.body;

  if (!sid) {
      throw new ApiError(401, "Unauthorized: No student ID found.");
  }

  const student = await Student.findByIdAndUpdate(
    sid,
    {
      $set :{
        firstname:firstname,
        lastname:lastname,
        email:email,
        phone:phone,
        image:image
      }
    },{
    new:true
    });

    student.save();
    
    const updatedStudent = await Student.findById(student._id).select("-password  -refreshtoken");

    res.status(200).json(updatedStudent);

})

//  update password   .......

const updatepassword = asyncHandler ( async (req, res) => {

  //  fetch new password from req body 

  const { password } = req.body;


  //  first we need to access student id 
 
   const sid = req.student._id;

   if( !sid ){
    throw new ApiError( 404, "Student id not found ");
   }

  //   find and update 

  // now hashed the password 
  

   const hashedpassword =  await bcrypt.hash(password , 10);
  


  //  find Student and update 

  const updatedStudent = await Student.findByIdAndUpdate(
    sid,
    {
      $set :{
        password : hashedpassword
      }
    },{
      new:true
    }
    )


    res.json(updatedStudent);

 })

//  logout student 

const studentlogout = asyncHandler ( async (req, res)=>{

//   find student 

const  sid  =  req.student._id;

const loggedOut = await Student.findByIdAndUpdate(
  sid,
  {
     $set: 
    { refreshtoken: undefined }
   }, 
  { new: true }
)

if (!loggedOut) {
  throw new ApiError(400, "Logout failed. Student not found.");
}

const refreshToken = await client.get(`refresh_token:${sid}`);

if(refreshToken){
  await client.set(`blacklist_refresh:${refreshToken}`, "true", "EX", 15 * 60)
  await client.del(`refresh_token:${sid}`);
}

const accesstoken = await client.get(`access_token:${sid}`);

if(accesstoken){
  await client.set(`blacklist_access:${accesstoken}`, "true", "EX", 15 * 60)
  await client.del(`access_token:${sid}`); // Remove stored access token

}


const options = {
  httpOnly : true,
  secure:true,
  sameSite: "strict" 
}


res
.status(200)
.clearCookie("refreshtoken", options)
.clearCookie("accesstoken", options)
.send("Student Logged Out successfully .....");

})



export  {  registerstudent , getProfile, loginstudent, getMyCourseDetails, updatedetails, updatepassword , studentlogout}

