import { Button } from '@mui/material'
import React from 'react'
import InfoSection from '../InfoSection'
import { useNavigate } from 'react-router-dom'



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



const TuitorDeatils = () => {


const navigate = useNavigate();

 const handleEditTuitorDetails = () =>{
  navigate("/api/v2m/p/active_tuitors/editTuitor");
 }


  return (
    <div className=' grid grid-cols-2 gap-5 w-full '  >
        <div className=' flex flex-col items-center justify-between w-full h-fit min-h-30 bg-white shadow-xl rounded-md p-5' >
            <div className=' flex flex-col items-center justify-center gap-5 w-full h-fit'  >
              <div  className='flex items-center justify-center h-25 w-25 rounded-full shadow-lg ' >
                  <img src="/girlstudent.png" alt="profileImg" className=' h-full  w-full object-top object-cover rounded-full  ' />
              </div>
              <h1 className=' font-semibold text-blue-500' >Priyanshi Rawat</h1>
            </div>
            <div className='flex items-center justify-end gap-5 w-full mt-10 border-y border-gray-500 py-5'>
              <Button  sx={{ color:"rgb(0,0,0) ", boxShadow:"inset 3px 3px 5px rgb(210,210,210), inset -3px -3px 5px rgba(0,0,0,0.5)" }}  > Block </Button>
              <Button  sx={{ color:"rgb(0,0,255) ", boxShadow:"inset 3px 3px 5px rgb(0,0,255,0.5), inset -3px -3px 5px rgba(0,0,255,0.5)" }} onClick={handleEditTuitorDetails} > Edit </Button>
              <Button  sx={{ color:"rgb(255,0,0) ", boxShadow:"inset 3px 3px 5px rgb(255,0,0,0.5), inset -3px -3px 5px rgba(255,0,0,0.5)" }}  > Delete </Button>
            
            </div>
            <div className="flex flex-col items-center justify-center gap-5 w-full h-fit mt-5">
              <InfoSection data={basicInfo} />
              <InfoSection data={contactInfo} />
             </div>
          </div>
          <div className=' flex flex-col items-center justify-between w-full h-fit min-h-30 gap-3'  >
             
              <div className=' w-full flex items-center justify-between bg-white  shadow-xl rounded-md p-5' >
               <h1 className=' text-xl' >Today Present </h1>
               <p>Yes / No</p>
               </div>
               <div className=' w-full flex items-center justify-between gap-3 shadow-xl rounded-md '   >
                <div className='  bg-white w-1/2 flex flex-col items-center justify-between p-3 shadow-xl rounded-md gap-10'   >
                <h1 className='text-xl ' >Total Attendance This Month</h1>
                <p className=' text-3xl text-amber-500' >17</p>
                </div>
                <div className='  bg-white w-1/2 flex flex-col items-center justify-between p-3 shadow-xl rounded-md gap-10'  >
                   <h1 className='text-xl '  >Total Salary This Month</h1>
                   <p className=' text-3xl text-amber-500' >₹ {17*1120} </p>
                </div>
               </div>
               <div className=' w-full flex flex-col items-start justify-start gap-3 shadow-xl rounded-md p-5 bg-white h-[27vw]'   >
                 <h1  className='text-xl w-full bg-amber-300 text-left p-1 '  >Lectures Schedule</h1>
                 <div className=' w-full flex flex-col items-center justify-between gap-3' >
                      <div className=' w-full flex flex-col items-center justify-between gap-10 mt-5'>
                        <p className='flex items-center justify-between text-lg border-b pb-2 text-amber-600 w-full'  ><span className=' text-left w-2/5' >Subject</span><span className=' text-left w-1/5' >:</span><span className=' text-left w-2/5' >Timing</span></p>
                        <p className='flex items-center justify-between text-lg text-black w-full'  ><span className=' text-left w-2/5' >Spring Boot Full Concept</span><span className=' text-left w-1/5' >:</span><span className=' text-left w-2/5' >12:00 PM - 01:00 PM</span></p>
                        <p className='flex items-center justify-between text-lg text-black w-full'  ><span className=' text-left w-2/5' >Java Core</span><span className=' text-left w-1/5' >:</span><span className=' text-left w-2/5' >03:00 PM - 04:30 PM</span></p>

                      </div> 
                 </div>
               </div>
           
          </div>
      </div>

  )
}

export default TuitorDeatils