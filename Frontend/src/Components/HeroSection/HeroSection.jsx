import React from 'react'
import Navbar from '../Navagation/Navbar.jsx'

function HeroSection() {
  return (
    <div className='flex items-center justify-between gap-5 pt-18  h-[100vh] md:h-[90vh] w-full   ' style={{ backgroundColor:"rgb(255,255,255)"  }}  >
       <div className=' flex flex-col w-[50%] p-2 md:py-20 md:pl-28 gap-4  h-full'  >
        <div className=' w-full text-center md:text-left font-bold text-2xl md:text-5xl leading-tight' >
             <h1 >Start learning today <br/> And take your skills <br/> To the next level!</h1>
        </div>
        <div> 
          <p className=' w-full text-justify  font-semibold opacity-50 '    >
          Unlock your potential with our interactive learning platform! Gain hands-on experience, explore expert-led courses, and master in-demand skills—all at your own pace. Whether you're a beginner or a pro, we provide the tools, resources, and community to help you succeed.
          </p>

        </div>
        <div className=' flex  w-full p-5 pl-0  items-center justify-between font-semibold text-2xl ' >
           <div className=' flex flex-col text-left text-amber-600 items-left justify-between gap-2  mt-5 rounded-3xl '  >
            <p className=' font-bold text-4xl' >100000+</p>
            <p>Learners</p>
           </div>
           <div  className=' flex flex-col  text-left text-blue-500 items-left justify-between gap-2 mt-5  rounded-3xl '  >
            <p className=' font-bold text-4xl' > 36+</p>
            <p>Active Course</p>
           </div>
           <div  className=' flex flex-col text-left text-amber-600 items-left justify-between gap-2  mt-5     rounded-3xl '  >
            <p className=' font-bold text-4xl' >50000+</p>
            <p>Students Placed</p>
           </div>
        </div>

       </div>
        <div  className=' flex flex-col w-[50%]  h-full '  >
             <div className=' flex justify-center items-center w-full  h-full  px-1 md:px-10 relative  '  >
                <div className=' absolute top-1/2 left-1/2 w-100 h-100  transform -translate-x-1/2 -translate-y-1/2  rounded-full z-10' style={{ backgroundColor: "#8EC5FC",
backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%) ", filter:"blur(50px)"   }} >

                </div>
                <div  className='flex flex-col items-center justify-end h-full w-4/5 z-20'  >
                <img src="/girlstudent.png" alt="" className=' w-full h-[90%] object-cover object-top '   />

                </div>
             </div>
        </div>
    </div>
  )
}

export default HeroSection


;
