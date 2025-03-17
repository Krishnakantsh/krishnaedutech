import React from 'react'
import './Contacts.css'

import { Button } from '@mui/material'
import SocialLinks from '../SocialIcons/SocialLinks'

function Contacts() {
  return (
    <div   className='flex flex-col w-full h-fit  pt-5 '  >

       <h1 className=' text-center font-bold text-4xl sm:text-5xl md:text-6xl  text-green opacity-60' >Contact Us</h1>
       <div  className=' grid md:grid-cols-[1fr_2fr] w-full gap-8 p-5 mt-10 h-fitcontactContainer   ' >
         <div  className=' flex flex-col h-fit rounded-2xl p-5 text-left gap-4 text-white '  style={{ background:"rgb(18,18,18)", boxShadow:"0 0 10px rgba(255,255,255,0.345)"  }} >
             <div className="flex flex-col justify-center  items-center w-full h-fit relative rounded-2xl contactImage">
                <img src="https://i.pinimg.com/736x/0f/41/ef/0f41efd11e4855e0248de896f3ab77ff.jpg" alt="contactAreaImage" className='h-full w-full object-cover object-top rounded-2xl  '   />
             </div>
             <h1  className=' font-bold text-2xl sm:text-3xl md:text-3xl  lg:text-4xl ' style={{color:"rgb(0,255,0)"}} >KrishnaTech</h1>
             <h3 className=' text-md  opacity-70 ' >Leading Online Learning Platform</h3>
             <h3 className=' text-md  opacity-70 ' >I am available for you 24 X 7. Connect with me via and call in to my account.</h3>
             <h3 className=' text-md  opacity-70'  > Phone : <span className='text-amber-500 ml-3'  >+91 - 9368238692</span></h3>
             <h3 className=' text-md  opacity-70  ' >Email : <span  className='text-amber-500 ml-5' >help.krishnatech@gmail.com</span></h3>

             <SocialLinks size={50}/>
             
         </div>
         <div  className=' flex flex-col h-fit rounded-2xl '  style={{ background:"rgb(18,18,18)", boxShadow:"0 0 10px rgba(255,255,255,0.345)"  }}  >
        <form action="">
              
        <div className=' grid  grid-cols-1 md:grid-cols-2 w-full justify-between items-center gap-5 h-fit p-5 '>
               <div className='flex flex-col w-full h-fit gap-2 justify-between items-start inputDiv ' >
                  <h4 className='font-semibold lg:text-md '  >YOUR NAME</h4>
                  <input type="text" className=' w-full pl-3 h-[10vw] md:h-[5vw] lg:h-[3vw]' style={{ background:"rgb(8,8,8)"  }}  />
               </div>
               <div className='flex flex-col w-full h-fit gap-2 justify-between items-start inputDiv' >
                  <h4 className='font-semibold lg:text-md '  >PHONE NUMBER</h4>
                  <input type="text" className=' w-full pl-3 h-[10vw] md:h-[5vw] lg:h-[3vw]' style={{ background:"rgb(8,8,8)"  }}  />
               </div>
          </div>
          <div className=' grid grid-cols-1 w-full justify-between items-center gap-5 h-fit p-5 '>
               <div className='flex flex-col w-full h-fit gap-2 justify-between items-start inputDiv ' >
                  <h4 className='font-semibold lg:text-md'  >EMAIL</h4>
                  <input type="text" className=' w-full pl-3 h-[10vw] md:h-[5vw] lg:h-[3vw]' style={{ background:"rgb(8,8,8)"  }}  />
               </div>
          </div>
          <div className=' grid grid-cols-1 w-full justify-between items-center gap-5 h-fit p-5 '>
               <div className='flex flex-col w-full h-fit gap-2 justify-between items-start inputDiv ' >
                  <h4 className='font-semibold lg:text-md '  >SUBJECT</h4>
                  <input type="text" className=' w-full pl-3 h-[10vw] md:h-[5vw] lg:h-[3vw]' style={{ background:"rgb(8,8,8)"  }}  />
               </div>
          </div>
          <div className=' grid grid-cols-1 w-full justify-between items-center gap-5 h-fit p-5 '>
               <div className='flex flex-col w-full h-fit gap-2 justify-between items-start inputDiv' >
                  <h4 className='font-semibold lg:text-md '  >YOUR MESSAGE</h4>
                  <textarea type="text" rows={6} className=' w-full p-2 pl-3  md:h-[8vw] ' style={{ background:"rgb(8,8,8)"  }}  />
               </div>
          </div>
          <div className=' grid grid-cols-1 w-full justify-between items-center gap-5 h-fit p-5 '>
               <Button variant='contained'  style={{ background:"rgb(0,0,0)" , color:"rgb(255,255,255)", boxShadow:"0 3px 10px rgba(252, 211, 47,0.345) , 0 -3px 10px rgba(252, 211, 47,0.345) ", border:"1px solid rgb(0,0,0)" }}  className='text-5xl md:text-6xl lg:text-lg font-bold h-[10vw] md:h-[5vw] lg:h-[3vw] w-full  rounded-4xl  sendMessage  '>SEND MESSAGE</Button>
          </div>

        </form>
         </div>
    
       </div>


    </div>
  )
}

export default Contacts