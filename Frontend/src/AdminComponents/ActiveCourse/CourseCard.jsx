import React from 'react'
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const CourseCard = () => {

  const [value, setValue] = React.useState(4.3);

  const navigate = useNavigate()

  const handleCourseDetails = () => {
    navigate("/api/v2m/p/active_courses/:id/coursedetails/");
  }

  return (
    <div className='flex flex-col cursor-pointer h-[25vw] w-[18vw] bg-white border border-gray-300 p-5 rounded-sm'   onClick={handleCourseDetails}  >
       <div className='w-full flex items-center justify-center h-2/3 border border-gray-300 rounded-sm '  style={{ backgroundColor:"rgba(242, 247, 250, 0.422)"}} >
          <img src="https://i.pinimg.com/736x/49/e7/36/49e736534ee5b60bd588a2bda2873ab9.jpg" alt="courseImg" className=' h-full w-full rounded-sm object-center object-cover'  />
       </div>
       <div className='w-full flex-col flex items-start justify-between py-3 h-1/3'  >
          <h1 className=' text-lg' >Spring Boot Full Concept</h1>
          <p className=' flex w-full items-center justify-between' ><Rating name="read-only" value={value} readOnly /> <span>(24512 Views)</span></p>
          <h3 className='w-full flex items-center justify-start gap-5 text-green-600' ><span>$ 12</span><span className=' line-through text-gray-600'  >$ 16</span></h3>
       </div>
    </div>
  )
}

export default CourseCard