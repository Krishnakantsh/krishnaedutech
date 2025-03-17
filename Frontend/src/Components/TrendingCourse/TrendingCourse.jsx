import React from 'react'
import AllCourseCard from '../OurCourse/AllCourseCard'
import { Button } from '@mui/material'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TrendingCourseCard from './TrendingCourseCard';

function TrendingCourse() {
  return (
    <div className=' flex justify-between items-center w-full h-fit  p-5 mt-15 '  >
       <div className=' flex flex-col justify-between items-center w-[65%] h-140 shadow-md rounded-2xl shadow-black p-10 pt-5 gap-5' style={{ backgroundColor:"rgb(255,255,255)" }} >
           <h1 className='font-bold text-2xl md:text-5xl text-fuchsia-400 ' >MOST POPULAR COURSE</h1>
           <p className=' text-xl  '  >Hundreds of students are satisfied with these courses.</p>
           <div  className='flex justify-start items-center w-full  px-10 relative' >
            <div className='flex justify-start items-center w-full overflow-auto  popularSlider '    >
              <div  className='flex justify-start items-start w-fit gap-10  ' >
               <TrendingCourseCard/>
               <TrendingCourseCard/>
               <TrendingCourseCard/>
              </div>
              </div>

       <Button
        // onClick={slideNext}
        // disabled={activeIndex === items.length - 5}
        variant="contained"
        className="z-50 bg-dark hover:bg-blue-300"
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "rgb(0,0,0)",
        }}
        aria-label="next"
      >  
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "white" }}
        />
      </Button>
      
      <Button

          // disabled={activeIndex === 0}
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "rgb(0,0,0)",
            
          }}
          className="z-50  text-white hover:bg-white-300"
          aria-label="prev"
          // onClick={slidePrev}
        
        >
          <KeyboardArrowRightIcon
            sx={{ transform: "rotate(90deg)", color: "white" }}
          />
        </Button>

           </div>
       </div>
       <div className=' h-140 w-[30%] flex justify-center items-center  ' >
         <div className=' h-full w-[100%] flex justify-center items-center rounded-2xl relative overflow-hidden'  >
          <video src="/7063373-hd_1080_1920_24fps.mp4" className='rounded-2xl h-full w-full object-cover object-center ' autoPlay loop muted  />
          <h1 className='  absolute  rotate-270 bottom-1/2 left-[-35%] text-white font-bold text-4xl  ' style={{textShadow:"0 0 10px white"  }}  >Study is Interesting Thing.</h1>
         </div>
       </div>
    </div>
  )
}

export default TrendingCourse