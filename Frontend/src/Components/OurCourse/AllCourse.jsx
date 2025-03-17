import React from 'react'
import AllCourseCard from './AllCourseCard'

function AllCourse() {
  return (
    <div className=' flex flex-col items-center justify-center  w-full  h-fit  mt-10 gap-10 p-10' >
      <h1 className='font-bold text-purple-800 text-center text-2xl md:text-4xl lg:text-6xl  ' >Our Latest Course</h1>
      <div className=' flex flex-wrap w-full  h-fit items-center justify-center gap-10 '  >
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>
         <AllCourseCard/>   
      </div>
    </div>
  )
}

export default AllCourse