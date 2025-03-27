import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutPage = () => {

  const navigate = useNavigate();

  const handleLogoutconfirm = () => {

    navigate("/api/v2m/login");
  }

  const handleLogoutcancle = () => {

    navigate("/api/v2m/p/dashboard");
  }



  return (
    <div className='h-fit flex items-center justify-center  w-full ' >
      <div className=' bg-white w-[40%] h-fit  flex flex-col items-start justify-between p-5 rounded-sm gap-10'  >
        <h1 className='text-4xl'  >  Are you sure to Logout</h1>
        <div className=' flex w-full  items-start justify-start gap-10 '  >
           <Button variant='contained'  sx={{  backgroundColor :"#463ACB"  }} onClick={handleLogoutconfirm}  >Confirm</Button>
           <Button variant='contained'  sx={{  backgroundColor :"RGB(255,0,0)"  }}  onClick={handleLogoutcancle} >Cancle</Button>
        </div>
      </div>
          
    </div>
  )
}

export default LogoutPage