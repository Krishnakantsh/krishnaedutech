import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import RecentStudentCard from './RecentStudentCard';
import InfoSection from '../InfoSection';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const  basicInfo = 
{ 
  heading: "Basic Information" ,
 firstname: "Priyanshi" ,
 lastname: "Rawat" ,
 birthday: "03 Nov 2002" ,
 gender: "Female" 
}



const  contactInfo = 
 { 
 heading: "Contact Information" ,
 email: "priyanshirawat@gmail.com" ,
 phone: "+91 - 9368238692" ,
 address:"Shahpur Nadim, Agra, UP - 283124"
 }


const  courseInfo = 
{ 
  heading: "Course Information",
 name: "Spring Boot Full Concept" ,
 batch: "Nov 2025" ,
 start: "03 Nov 2025" ,
 duration: "60 Days" ,
 expired: "03 Jan 2026" 
}


const StudentDetail = () => {

 const navigate = useNavigate();

 const handleEditStudentDetails = () =>{
  navigate("/api/v2m/p/active_students/editStudent");
 }


  return (
    <div className=' grid grid-cols-1 gap-5 w-full '  >
    <div className=' flex flex-col items-center justify-between w-full h-fit min-h-30 bg-white shadow-xl rounded-md p-5' >
        <div className=' flex flex-col items-center justify-center gap-5 w-full h-fit'  >
          <div  className='flex items-center justify-center h-25 w-25 rounded-full shadow-lg ' >
              <img src="/girlstudent.png" alt="profileImg" className=' h-full  w-full object-top object-cover rounded-full  ' />
          </div>
          <h1 className=' font-semibold text-blue-500' >Priyanshi Rawat</h1>
        </div>
        <div className='flex items-center justify-end gap-5 w-full mt-10 border-y border-gray-500 py-5'>
          <Button  sx={{ color:"rgb(0,0,0) ", boxShadow:"inset 3px 3px 5px rgb(210,210,210), inset -3px -3px 5px rgba(0,0,0,0.5)" }}  > Block </Button>
          <Button  sx={{ color:"rgb(0,0,255) ", boxShadow:"inset 3px 3px 5px rgb(0,0,255,0.5), inset -3px -3px 5px rgba(0,0,255,0.5)" }} onClick={handleEditStudentDetails} > Edit </Button>
          <Button  sx={{ color:"rgb(255,0,0) ", boxShadow:"inset 3px 3px 5px rgb(255,0,0,0.5), inset -3px -3px 5px rgba(255,0,0,0.5)" }}  > Delete </Button>
        
        </div>
        <div className="flex flex-col items-center justify-center gap-5 w-full h-fit mt-5">
          <InfoSection data={basicInfo} />
          <InfoSection data={contactInfo} />
          <InfoSection data={courseInfo} />
         </div>
      </div>
  </div>
  )
}

export default StudentDetail