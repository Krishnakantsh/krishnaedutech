import React from 'react'
import MessageIcon from '@mui/icons-material/Message';

function Notification() {
  const notification =[1];
  return (
    <div  className=" flex flex-col items-center justify-start  mt-20 w-full h-fit min-h-[25vw] pt-5 px-10 gap-5" >
    
      {
        notification.length == 0 &&   <h1  className=' text-4xl text-gray-700 font-semibold' > No Notification Found !!  </h1>
      }
      {
       [1,1].map(()=>
        <div className=' flex flex-col w-full min-h-[5vw] h-fit items-start justify-between p-5  rounded-2xl shadow-lg' style={{ backgroundColor:"rgb(255,255,255)" }} >
       <h1 className=' font-bold text-xl' >  Pendind Payment Related Alert</h1 >
       <p className=' text-md opacity-60 mt-5'  > <span className='mr-5'  ><MessageIcon/></span> Your payment is pending state, Make payment now</p>
       </div>
       
      )    
      }

    </div>
  )
}

export default Notification