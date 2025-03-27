import { Admin } from "../Models/Admin.js";
import { Batch } from "../Models/Batch.js";
import { Student } from "../Models/Student.js";
import { Tuitor } from "../Models/Tuitor.js";
import { client } from "../RedisSetUp/RedisSetup.js";
import { ApiError } from "../Utils/ApiError.js";
import asyncHandler from "../Utils/AsyncHandler.js";
import bcrypt from "bcrypt"

//  for login .................................

const adminLogin = asyncHandler ( async ( req, res) =>{

  const { email, password } = req.body

  if( !email || !password){
    throw new ApiError(400, "All fields are required.... ")
  }
  
  //  find admin with email

  const admin = await Admin.findOne({email})

  if(!admin){
    throw new ApiError(404, "Admin not found with this Email : ", email)
  }

  //  password matching 

  const passwordStatus = await bcrypt.compare(password , admin.password)

  if(!passwordStatus)
    throw new ApiError(400, "Bad Credentials")

//  refresh token setup ...........................................

  const refreshTokenadmin = await admin.generateRefreshToken()

  if(!refreshTokenadmin)
    throw new ApiError(400, "Refresh token does not generated ... ")
  client.set("refresh_token_admin",refreshTokenadmin, "EX", 7*24*60*60)

//  access token setup ...........................................

  const accessTokenAdmin = await admin.generateAccessToken()

  if(!accessTokenAdmin)
    throw new ApiError(400, "Access token does not generated ... ")
  client.set("access_token_admin",accessTokenAdmin, "EX", 15*60)

  const options = {
    httpOnly:true,
    secure:true,
    sameSite:"strict"
  }
  
   
  res
  .status(201)
  .cookie("accessTokenAdmin", accessTokenAdmin, options)
  .cookie("refreshTokenAdmin", refreshTokenadmin , options)
  .send(accessTokenAdmin)
  
})
//  for signup ................................

const adminRegister = asyncHandler ( async ( req, res)=>{

   const {fullname,email,phone,password }  = req.body

   if( !fullname || !email || !phone || !password  ){
    throw new ApiError(400 , "All fields are required ... ")
   }

   const hashedPassword = await bcrypt.hash(password , 10)

   const admin = new Admin({
    fullname : fullname,
    email:email,
    phone:phone,
    password : hashedPassword
   })

   const refreshtoken = await admin.generateRefreshToken()

   if(!refreshtoken){
    throw new ApiError(400, "Refreshtoken token not generated ! Something error occured ...")
   }else{
    admin.refreshtoken = refreshtoken
   }
  
   const registerAdmin = await admin.save()

   if(registerAdmin){
    res.status(201)
    .json(registerAdmin)
   }
   

   res.status(400)
   .send("Something error occured during register admin")

} )
//  password update  
const updatePassword = asyncHandler ( async (req, res)=>{

  const aid = req.admin._id 
  const {password} = req.body
  

  //  find admin 

  const admin = await Admin.findById(aid)

 if( !admin ){
  throw new ApiError(404, "Admin not found ")
 }
 
//   hashed password 
const hashedPassword = await bcrypt.hash(password ,10)

if(!hashedPassword)
  throw new ApiError(400, "Password hashing error ...")

admin.password = hashedPassword
await admin.save()


res.status(200)
.send("Password updated successfully !!! ")


})
//  get admin profile

const getAdminProfile = asyncHandler ( async ( req, res) =>{
  const aid = req.Admin._id

  const admin = await Admin.findById(aid)
  
  if(!admin)
    throw new ApiError(404, "Admin profile does not found .... ")

  res.status(200)
  .json(admin)
})
const logout = asyncHandler( async ( req, res) =>{

  const aid = req.admin._id

  //  find admin 

  const admin = await Admin.findById(aid)

  if( !admin)
    throw new ApiError(404, "Admin not found !!! ")

  admin.refreshtoken = undefined

  await admin.save()


  //  blacklist accesstoken and refresh token 

  const accesstoken = await client.get(`access_token_admin: ${aid}`)
  if(accesstoken){
    await client.set("blacklist_access_admin",accesstoken,"true", "EX", 15*60)
    await client.del("access_token_admin")
  }

  const refreshtoken = await client.get(`refresh_token_admin: ${aid}`)
  if(refreshtoken){
    await client.set("blacklist_refresh_admin",refreshtoken,"true", "EX", 7*24*60*60)
    await client.del("refresh_token_admin")
  }

  res.status(200)
  .clearCookie("accessTokenAdmin")
  .clearCookie("refreshTokenAdmin")
  .send("admin logged out successfully.....")

})



const getStudent = asyncHandler( async ( req, res) => {

 const sid = req.params.id

//   find student by id 

const student = await Student.findById(sid)

if(!student)
  throw new ApiError(404, "Student not found .... ")


res.status(200)
.json(student)

})
const getAllStudent = asyncHandler( async ( req, res)=>{

  const allStudents = await Student.find()

  if(!allStudents)
    throw new ApiError(404, "Students are not available !!! ")

 res.status(200)
 .json(allStudents)

})
const setStudentStatus = asyncHandler( async(req, res) => {
 
  const sid = req.params.id
  const { status} = req.body

  //  find student 

  const student = await Student.findById(sid)

  if(!student)
    throw new ApiError(404, "STUDENT NOT FOUND !!! ")

  student.status = status
  await student.save()

  res
  .status(200)
  .json(student)

})
const deleteStudent = asyncHandler( async ( req, res)=>{
  const sid = req.params.id

  //  find student by id 
 const student = await Student.findByIdAndDelete(sid)

 if(!student)
  throw new ApiError(400, "Something error occured !!!!")

 res.status(200)
 .send("Student delete successfully !!! ")

 })

//  tuitor functions 

const getTuitor = asyncHandler( async ( req, res) => {

 const tid = req.params.id

//   find student by id 

const tuitor = await Student.findById(tid)

if(!tuitor)
  throw new ApiError(404, "Student not found .... ")


res.status(200)
.json(tuitor)

})
const getAllTuitors = asyncHandler( async ( req, res)=>{

  const allTuitors = await Tuitor.find()

  if(!allTuitors)
    throw new ApiError(404, "Tuitors are not available !!! ")

 res.status(200)
 .json(allTuitors)

})

const setTuitorStatus = asyncHandler( async(req, res) => {
 
  const tid = req.params.id
  const { status} = req.body

  //  find student 

  const tuitor = await Tuitor.findById(tid)

  if(!tuitor)
    throw new ApiError(404, "TUITOR NOT FOUND !!! ")

  tuitor.status = status
  await tuitor.save()

  res
  .status(200)
  .json(tuitor)

})
const deleteTuitor = asyncHandler( async ( req, res)=>{
  const tid = req.params.id

  //  find student by id 
 const tuitor = await Tuitor.findByIdAndDelete(tid)

 if(!tuitor)
  throw new ApiError(400, "Something error occured !!!!")

 res.status(200)
 .send("Student delete successfully !!! ")

 })

//  course functions 

const getAllCourse = asyncHandler( async ( req, res)=>{

  const allCourse = await Batch.find()

  if(!allCourse)
    throw new ApiError(404, "Courses are not available !!! ")

 res.status(200)
 .json(allCourse)

})
const getCourse = asyncHandler( async ( req, res) => {

  const cid = req.params.id
 
 //   find student by id 
 
 const course = await  Batch.findById(cid)
 
 if(!course)
   throw new ApiError(404, "Student not found .... ")
 
 
 res.status(200)
 .json(course)
 
 })
 const deleteCourse = asyncHandler( async ( req, res)=>{
  const cid = req.params.id

  //  find student by id 
 const batch = await Batch.findByIdAndDelete(cid)

 if(!batch)
  throw new ApiError(400, "Something error occured !!!!")

 res.status(200)
 .send("Course delete successfully !!! ")

 })

 const  addCourse = asyncHandler( async ( req, res) => {
  

  const {batchname,startdate,duration, expiredate, actualprice, discountprice ,discount,image,hightlight,description, } = req.body

  if(  !batchname || !startdate || !duration || !expiredate || !actualprice || !discountprice || !discount || !image || ! hightlight || !description ){
      throw new ApiError(400, "All fields are required !!!! ")
  }

  



  const newCourse = new Batch({
    batchname : batchname,
    startdate : new Date("dd-MM-yyyy").getDate(),
    duration : duration,
    expiredate : ""

  })





 })



 const datee = () => {
   const date = new Date()
   console.log(date)
   date.setDate(date.getDate()+10)
   console.log(date)

   const futureDate = date.toISOString().split("T")[0];
   console.log(futureDate)
}

datee()


export {adminRegister, adminLogin, getStudent, logout , getAllStudent, updatePassword, getAdminProfile,getAllTuitors,getAllCourse, getTuitor, getCourse, setTuitorStatus, setStudentStatus, deleteStudent, deleteCourse, deleteTuitor }




