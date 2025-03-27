import React from 'react'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CourseDetails = () => {

const navigate = useNavigate();
const handleEditCourseDetails = ( ) =>{
  navigate("/api/v2m/p/active_courses/:id/editcourse");
}
  

  return (
    <>
       <div className=" flex items-start justify-between gap-5 w-full">
         <div className=" w-1/4 h-[38vw] flex flex-col items-center justify-between border border-gray-300 rounded-sm  bg-white  ">
           <div className="flex h-4/6 w-full items-center justify-between border-b border-gray-200 p-4">
           <img src="https://i.pinimg.com/736x/49/e7/36/49e736534ee5b60bd588a2bda2873ab9.jpg" alt="courseImg" className=' h-full w-full rounded-sm object-center object-cover'  />
           </div>
           <div className="flex flex-col h-2/6 w-full items-start justify-between gap-3 p-4">
                 <h1 className=' text-semibold text-xl text-green-500'  >Spring Boot Full Concept </h1>
                 <p  className=' text-lg' >Price : <span className=' text-green-500' >$ 12</span></p>
                 <p  className=' text-lg' > Actual Price : <span className=' line-through opacity-80 text-gray-500'  >$ 16</span></p>
                 <p className=' text-lg' >Discount : <span className=' text-green-500' >30 %</span></p>
           </div>
         </div>
         <div className=" w-3/4 flex flex-col  items-start justify-between h-fit  gap-7">
        <div className=" w-full flex   items-center justify-between h-fit bg-white border border-gray-300 rounded-sm gap-5"  >
        <div className=" w-[60%] flex flex-col  items-start justify-between  h-fit py-5 p-5 gap-5" >
            <h1 className='text-2xl text-green-500' >Spring Boot Full Concept </h1>
            <h1 className='w-full flex items-center justify-evenly ' ><span className='text-left w-full' >Duration</span><span className='text-left w-full' >:</span><span className='text-left w-full'  >60Days</span></h1>
            <h1 className='w-full flex items-center justify-evenly ' ><span className='text-left w-full' >Started At</span><span className='text-left w-full' >:</span><span className='text-left w-full'  >03 Nov 2025</span></h1>
            <h1 className='w-full flex items-center justify-evenly ' ><span className='text-left w-full' >Complete</span><span className='text-left w-full' >:</span><span className='text-left w-full'  >03 Jan 2026</span></h1>
            <h1 className='w-full flex items-center justify-evenly ' ><span className='text-left w-full' >Tuitors</span><span className='text-left w-full' >:</span><span className='text-left w-full'  >John Dew , Krishna </span></h1>
            
            </div>
            <div className=' flex flex-col items-end justify-end w-[40%] gap-5 h-[15vw] pr-5' >
                <Button variant='outlined' color='success'  >Active</Button>
                <Button variant='outlined' color='primary'  onClick={handleEditCourseDetails}  > Edit Details </Button>
                <Button variant='outlined' color='error' >Remove Course</Button>
            </div>
        </div>
            <div className=" w-full flex flex-col  items-start justify-between border border-gray-300 rounded-sm h-fit bg-white py-5 p-5 gap-5" >
            <h1 className='text-2xl text-green-500' >Course Hightlights </h1>
             <p className='flex gap-5 items-center justify-center' ><span className='text-blue-500' ><WifiTetheringIcon/></span> <span>Weekly Live Classes</span></p>
             <p className='flex gap-5 items-center justify-center'><span  className='text-blue-500'   ><PlayCircleOutlineIcon/></span> <span>85+ Hours on demand video</span></p>
             <p className='flex gap-5 items-center justify-center' > <span className='text-blue-500'   ><CodeIcon/></span><span>2 major Project</span></p>
             <p className='flex gap-5 items-center justify-center' ><span className='text-blue-500'   ><DirectionsRunIcon/></span> <span>2 Month course duration</span></p>
             <p className='flex gap-5 items-center justify-center' > <span className='text-blue-500'   ><AccessTimeIcon/></span><span>2 Years access</span></p>
            
            </div>
         </div>

       </div>
       <div className=" flex flex-col items-start justify-between gap-5 w-full bg-white h-fit p-5" >
        <h1 className='text-2xl text-green-500'  >What do you learn in This Course</h1>
        <div className=" flex flex-col items-start justify-between gap-5 w-full" >
          <p>Spring Framework Core Features - Spring IOC Container, Beans, AutoConfigurations</p>
          <p>Dependency Injection</p>
          <p>Spring Boot Internals, Spring Initializr, and Starter Projects</p>
          <p>Setting up an In-Memory Database with H2 DB</p>
          <p>Exception Handling in Spring Boot Application</p>
          <p>Building Spring Boot REST APIs - Create REST APIs with ease</p>
          <p>Master Spring Data JPA from Basics to Custom Queries with MySQL and PostgreSQL</p>
          <p>Secure your REST APIs with Spring Security 6 and SQL Database</p>
          <p>Third-Party Registration System with Google OAuth and JWT Authentication</p>

        </div>

       </div>
    </>
  )
}

export default CourseDetails