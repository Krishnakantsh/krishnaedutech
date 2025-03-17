import { Button, OutlinedInput } from '@mui/material'
import React from 'react'

function ManagementLogin() {
  return (
    <div className=' flex items-center justify-center  mt-17 w-full h-[43vw]' style={{ backgroundColor:"rgb(210,210,210)" }} >
         <div className=' flex flex-col items-center justify-between h-[30vw] w-[22vw]  rounded-2xl p-4'  style={{boxShadow:"-5px -5px 10px rgb(255,255,255), 5px 5px 10px rgb(0,0,0,0.3)" }} >
            <div className=' w-full flex flex-col items-center justify-center ' >
               <div className='h-[5vw] w-[5vw] rounded-full '  >
                 <img src="/logo1.png" alt="logoImg" className=' w-full h-full object-cover object-center' />
              </div>
              <div>
                <h2 className='  font-bold text-xl mt-3 '  >Learning Strategy</h2>
                <p   className='  font-semibold text-lg mt-1 ' >Made Easy !</p>
              </div>
            </div>
              <div className=' flex flex-col w-full items-center justify-between'  >
                <form action=""  className=' flex flex-col w-full items-center justify-between gap-8' >
                      <OutlinedInput placeholder="Email / Phone" sx={{boxShadow:"inset 3px 3px 8px rgb(0,0,0,0.5), inset -4px -4px 8px rgb(255,255,255) ", borderRadius:"20px" }}    />
                      <OutlinedInput placeholder="Password" sx={{boxShadow:"inset 3px 3px 8px rgb(0,0,0,0.5), inset -4px -4px 8px rgb(255,255,255) ", borderRadius:"20px",border:"none" }}    />
                      <Button variant='contained' type='submit' sx={{ width:"75%", borderRadius:"30px", backgroundColor:"rgb(4, 105, 168)"  }} >Login</Button>
                </form>

            </div>
              <p className=' text-md flex gap-3 text-light opacity-90 text-blue-500' ><span className='' ><a href=""  >Forgot Password</a></span> <span className='text-black text-lg ' >or</span><span><a href="">SignUp</a></span></p>
         </div>


    </div>
  )
}

export default ManagementLogin