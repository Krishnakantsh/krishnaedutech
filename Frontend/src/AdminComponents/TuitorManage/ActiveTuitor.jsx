import React from 'react'
import ActiveCard from '../ActiveCard'
import { Button } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RecentTuitors from './RecentTuitors'
import EditTuitor from './EditTuitor'
import AddNewTuitor from './AddNewTuitor'
import TuitorDeatils from './TuitorDeatils'


 const activeStats = {
   type:"Active Tuitors",
   count:"223"
 }



const ActiveTuitor = () => {

  const navigate = useNavigate();

 const handleAddNewTuitor = () =>{
   navigate("/api/v2m/p/active_tuitors/addTuitor");
 }


  return (
    <div className='flex flex-col items-center justify-start w-full h-fit gap-5 '  >
      <div className=' grid grid-cols-[1fr_2fr] gap-5 w-full'  >
        <ActiveCard  data={activeStats}  />
        <div className=' flex flex-col w-full h-35 items-start justify-start bg-white px-3 py-5 rounded-md shadow-lg gap-10' style={{ backgroundColor:"rgb(210,210,210)" }} >       
             <div className=' flex w-full items-center justify-between' >
             <h1 className=' text-xl font-semibold' >Search Tuitor With Tuitor Id</h1>
                    <Button  variant='outlined'  sx={{border:"1px solid black", color:"black"   }} onClick={handleAddNewTuitor} >Add New Tuitor</Button>
                    </div>
          <div className="flex items-center rounded-md  pl-3 w-full  "  style={{ boxShadow:"  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)" }}  >
          <input
            id="sid"
            name="sid"
            type="text"
            placeholder="Enter Student Id"
            className="block w-full grow py-1.5 pr-3 pl-1 text-base text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-0 sm:text-sm/6"
          />
    
        </div>
        </div>
      </div>

         <Routes>
          <Route path='/' element={<RecentTuitors/>} />
          <Route path='/editTuitor' element={<EditTuitor/>} />
          <Route path='/addTuitor' element={<AddNewTuitor/>} />
          <Route path='/:id' element={<TuitorDeatils/>} />
        </Routes>


    </div>
  )
}

export default ActiveTuitor