import React from 'react'
import SocialLinks from '../SocialIcons/SocialLinks'




function Footer() {
  return (
    <>
    <div  className=' grid md:grid-cols-1 lg:grid-cols-[1fr_3fr]  w-full md:gap-20  lg:gap-5 h-fit  mt-20  p-10' style={{  backgroundColor:"rgb(255,255,255)"  }} >
      <div className='hidden  md:flex flex-col justify-start items-start w-full h-full'  >
        <div className=' flex flex-col md:flex-row w-full justify-between md:justify-start items-center md:items-start gap-5  '  >
            <div className=' flex justify-start items-center h-25 md:h-30 lg:h-18 w-25 md:w-30 lg:w-18 rounded-full '  style={{  boxShadow: "0 0 15px rgba(255,255,255,0.8)" }}  >
              <img   className='  h-full w-full  object-cover object-top rounded-full '  src="/logo1.png" alt="profileimg" />
            </div>
            <div className=' flex justify-center items-center md:h-30  lg:h-15 w-fit text-2xl md:text-5xl lg:text-4xl font-bold' >KrishnaTech</div>
            </div>
        <div  className=' mt-10' >
          <SocialLinks size={70} />
        </div>
      </div>    

      <div  className=' flex  flex-col md:flex-row justify-between items-start gap-10  pb-5 h-fit' > 
      <div className=' flex flex-col justify-between  md:items-start  lg:pl-40 gap-5  w-full h-fit  ' >
        <h1 className=' text-2xl text-green-500 font-semibold  '  >QUICK LINK</h1>
       <a href=""> <h2>Home</h2></a>
       <a href=""> <h2>About</h2></a>
       <a href=""> <h2>Services</h2></a>
       <a href="">  <h2>Blog</h2></a>
       <a href=""> <h2>Contact</h2></a>
       <a href=""> <h2>Problem Of the day</h2></a>
       <a href=""> <h2 className=' text-nowrap ' >Top 10 previous problem solver</h2></a>
       <a href=""> <h2 className=' text-nowrap ' >Download E-Book</h2></a>
        
        
       
        
        
        

      </div>    
      <div className=' flex flex-col  lg:justify-between items-center lg:pl-40 gap-5  w-full h-fit '  >
        <h1 className=' text-2xl text-green-500 font-semibold  ' >RESOURCES</h1>
        <h2>Python</h2>
        <h2>Java</h2>
        <h2>C++ / C</h2>
        <h2>PHP</h2>
        <h2>NODE.JS</h2>
        <h2>Javascript</h2>
        <h2>Bootstrap</h2>
        <h2>Tailwinds</h2>
      </div>  
      <div className=' flex flex-col justify-between  md:items-end  lg:pl-40 gap-5  w-full h-fit '  >
        <h1 className=' text-2xl text-green-500 font-semibold  '  >DEVELOPRES</h1>
        <h2>JAVA FULL STACK</h2>
        <h2>Python Full Stack</h2>
        <h2>API Reference</h2>
        <h2>Spring Boot </h2>
        <h2>Django</h2>
        <h2>Larawel</h2>
        <h2>MVC Architecture</h2>
        <h2>Security</h2>
      </div>
      </div>

    </div>


    <div  className=' flex justify-center items-center border border-l-0 border-r-0 border-t-green-400   p-10 w-full h-fit '   >
         <h2 className=' text-xl' style={{ textShadow:"0 0 15px rgb(255,255,255)"  }} > © <span  className='text-green-500 '  style={{ textShadow:"0 0 25px rgb(0,255,0)"  }}  >2025</span> All Right Reserved by Krishna Developer </h2>
    </div>
    </>
  )
}

export default Footer