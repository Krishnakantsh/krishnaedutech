import React from "react";

import { Route, Routes } from "react-router-dom";
import AllCourse from "./AllCourse";
import CourseDetails from "./CourseDetails";
import EditCourse from "./EditCourse";
import AddNewCourse from "./AddNewCourse";

const ActiveCourses = () => {

 

  return (
    <div className=" flex flex-col w-full h-fit items-start justify-start gap-5">
      <div className=" flex  w-full h-fit items-center justify-between gap-5 bg-white px-5 rounded-sm" >
      <h1 className="text-4xl">Courses</h1>
      <div className=" flex flex-col items-center justify-center border-l border-gray-300 h-20 px-5" >
        <p className=" text-xl text-green-500" >Active Course </p>
        <p className=" text-lg" >21</p>
      </div>
      </div>
     
      
       <Routes>
        <Route path="/" element={<AllCourse/>} />
        <Route path="/:id/coursedetails" element={<CourseDetails/>} />
        <Route path="/:id/editcourse" element={<EditCourse/>} />
        <Route path="/addcourse" element={<AddNewCourse/>} />
       </Routes>
    


    </div>
  );
};

export default ActiveCourses;
