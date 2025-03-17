import { Button } from '@mui/material'
import React from 'react'

function AllCourseCard() {
  return (
    <div className='flex flex-col items-center justify-between h-[25vw]  w-[20vw] rounded-xl shadow-2xl shadow-green-300  ' style={{ background:"rgb(0,0,0)"  }}  >
     <div className=' flex justify-center items-center w-full h-1/2 ' >
      <img src="https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg" alt="" className='  w-full h-full  object-cover object-center rounded-xl '   />
     </div>
     <div className=' flex flex-col  justify-between items-start w-full h-1/2 p-5 ' >
      <h2 className='text-white ' >Learn Spring Boot</h2>
      <h2 className='text-white ' >Duration : <span className='  opacity-45 line-through ' >60 Days</span>
      <span className='  opacity-100 ml-2' >60 Days</span> </h2>
      <p className='flex justify-start items-center text-left  text-white  w-full gap-3 ' >Price : <span className='  opacity-60 line-through '  >₹ 6000</span> <span className=' text-green-500  '  >20% Off</span  > <span >₹ 4800</span> </p>
       <div className=' flex justify-between items-center  gap-2  '  >
        <Button variant='contained' sx={{ color:"rgb(255,255,255)" , backgroundColor:"green" }} onClick={()=> window.location.href="/course-details" }  >Get Details</Button>
        <Button variant='contained' sx={{ color:"rgb(255,255,255)" , backgroundColor:"rgb(23,141,241)" }} >Add To Cart</Button>
       </div>
     </div>
         
    </div>
  )
}

export default AllCourseCard