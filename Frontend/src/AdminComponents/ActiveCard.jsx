import React from 'react'
import PeopleIcon from '@mui/icons-material/People';

const ActiveCard = ({data}) => {
  return (
    <div  className='h-35 flex items-center justify-between w-full p-5 bg-white rounded-md relative shadow-lg ' >
    <div className='flex items-center justify-center h-fit w-1/3 ' >
       <div className=' h-25 w-25 rounded-full shadow-xl flex items-center justify-center text-2xl' style={{  backgroundColor: "rgb(128, 203, 196,0.35)"  }}  >
        <PeopleIcon sx={{ fontSize:"70px", color:"rgb(23,141,241)"}} />
       </div>
    </div>
    <div className='flex flex-col items-start justify-between h-full pl-5 w-2/3'  >
      <h1 className=' text-3xl'   >{data?.count}</h1>
      <p className=' text-lg text-blue-600' >{data?.type}</p>
    </div>
    <div className='absolute right-5 top-5 h-8 w-8 rounded-full animate-ping bg-blue-500' >

    </div>
</div>
  )
}

export default ActiveCard