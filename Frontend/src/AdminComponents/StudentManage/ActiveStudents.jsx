import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import RecentStudentCard from './RecentStudentCard.jsx';
import { Button } from '@mui/material';
import ActiveCard from '../ActiveCard.jsx';
import StudentDetail from './StudentDetail.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddNewStudent from './AddNewStudent.jsx';
import EditStudent from './EditStudent.jsx';


const activeStats = {
        type:"Active Students",
        count:"26555"
}
     

function ActiveStudents() {

  const navigate = useNavigate();

  const handleAddNewStudent = () =>{
    navigate("/api/v2m/p/active_students/addStudent");
  }


  return (
    <div className='flex flex-col items-center justify-start w-full h-fit gap-5 '  >
      <div className=' grid grid-cols-[1fr_2fr] gap-5 w-full'  >
        <ActiveCard  data={activeStats} />
        <div className=' flex flex-col w-full h-35 items-start justify-start bg-white px-3 py-5 rounded-md shadow-lg gap-10' style={{ backgroundColor:"rgb(210,210,210,0.55)" }} >  
          <div className=' flex w-full items-center justify-between' >
          <h1 className=' text-xl font-semibold' >Search Student With Student Id</h1>
          <Button  variant='outlined'  sx={{border:"1px solid black", color:"black"   }} onClick={handleAddNewStudent} >Add New Student</Button>
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
               <Route path='/' element={<RecentStudentCard/>} />
               <Route path='/addStudent' element={<AddNewStudent/>} />
               <Route path='/editStudent' element={<EditStudent />} />
               <Route path='/:id' element={<StudentDetail/>} />
           </Routes>
        
    </div>
  )
}

export default ActiveStudents