import React from "react";

import { Avatar, Button } from "@mui/material";
import { ShoppingCart, Timer, School, LocalOffer, Bookmark } from "@mui/icons-material";

const MyCourse = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage: "https://via.placeholder.com/150",
    purchasedCourses: [
      {
        title: "React Mastery",
        duration: "6 Weeks",
        type: "Frontend Development",
        price: 200,
        discount: 20,
      },
    ],
    savedItems: ["Advanced JavaScript", "Node.js Fundamentals"],
  };

  return (
    <div className="p-6 w-full h-fit flex flex-col gap-6 pt-20 mx-auto  relative">
             <div className=" flex w-full items-center justify-between  h-fit p-1 gap-10 " >
              <div className=" flex  items-center flex-col justify-between h-[35vw] w-[30%]  shadow-lg rounded-2xl p-5" style={{ background:"rgb(255,255,255)"   }}  >
                <div  className="flex justify-center items-center w-full  h[50%] " >
                      <div className=" flex justify-center items-center w-[12vw]  h-[12vw] rounded-full shadow-lg shadow-gray-700 overflow-hidden " >
                           <img src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" alt="profile image"  className=" h-full w-full rounded-full object-cover object-top" />
                      </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full  h[30%] px-3 " >
                  <h2 className=" font-semibold text-xl md:text-3xl w-full text-center my-5 " >John Parker</h2>
                  <p className=" text-xl   "  >Contact : <span className=" font-semibold opacity-60 text-blue-700 "   >  9368238692 </span> </p>
                  <p className=" text-xl  mt-5 "  >Email : <span className=" font-semibold opacity-60 text-blue-700 "  >johnparker87@gmail.com</span> </p>
                </div>
                <div className="flex  justify-around items-center w-full  h[30%]  gap-10 "  >
                  <Button variant=" outlined "   sx={{  border:"2px solid rgb(255,0,0) ", color:" rgb(255,0,0)" , backgroundColor:"rgba(255,0,0,0.2)", fontWeight:"700", width:"40%"  }}  >
                        Logout
                  </Button>
                  <Button variant=" outlined "  sx={{  border:"2px solid green " , color:" green",   backgroundColor:"rgba(0,255,0,0.2)", fontWeight:"700" , width:"40%"  }}  >
                     Edit 
                  </Button>
                </div>
         
              </div>
              <div className=" flex  items-center flex-col justify-between h-[35vw] w-[70%] rounded-2xl gap-5"  >
                <div  className=" flex  items-start flex-col justify-between h-[35vw] w-full shadow-lg rounded-2xl p-3 relative " style={{ background:"rgb(255,255,255)"  }}   >
                   <h1 className=" absolute top-5 right-5 rounded-2xl px-3 py-1 shadow-xl" style={{ border:"2px solid green"  , color:"green" }}  >Active Course</h1>
                   <Button variant=" outlined "   sx={{  border:"2px solid  rgb(255,0,0) ", color:" rgb(255,0,0)" , backgroundColor:"rgba(255,0,0,0.2)", fontWeight:"700", width:"40%", position:"absolute", bottom:"10px ", right:"15px"  }}  >
                        Remove This Course
                  </Button>

                   <h1 className=" w-full  text-left text-2xl font-semibold  " style={{ color:"mehroom" }}  >Course Name : <span className=" text-green-500"  >   Spring Boot Full Concept </span> </h1>
                   <p   >Duration : <span className=" text-green-500"  > 120 Days</span></p>
                   <p>Starting Date : <span className=" text-green-500"  >12 March 2025</span> </p>
                   <p>Expiry Date : <span className=" text-green-500"  >12 July 2025</span> </p>
                   <p>Course Validity : <span className=" text-green-500"   > 2 Years </span> </p>
                </div>
                <h1 className=" text-left w-full text-xl text-green-800"  >Recommended Course</h1>
              
                <div className=" flex  items-center  justify-between h-[35vw] w-full rounded-2xl gap-10"   >
                  <div className=" flex  items-center flex-col justify-between h-full w-[33%] shadow-lg rounded-2xl gap-10"  style={{ background:"rgb(255,255,255)"  }}   >
                       <img src="https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg" alt="courseimg" className="w-full h-full  object-cover object-center rounded-2xl"  />
                  </div>
                  <div className=" flex  items-center flex-col justify-between h-full w-[33%] shadow-lg rounded-2xl gap-10" style={{ background:"rgb(255,255,255)"  }}   >
                           <img src="https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg" alt="courseimg"  className="w-full h-full  object-cover object-center rounded-2xl" />
                  </div>
                  <div className=" flex  items-center flex-col justify-between h-full w-[33%] shadow-lg rounded-2xl gap-10" style={{ background:"rgb(255,255,255)"  }}    >
                    <img src="https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg" alt="courseimg"  className="w-full h-full  object-cover object-center rounded-2xl"  />
                  </div>
                </div>
              </div>
             </div>
             <div  className=" w-full h-fit flex flex-col items-center justify-between gap-10 p-2" >
               <div  className=" w-full h-fit flex flex-col items-center justify-between  gap-5 "  >
                <h1 className=" w-full  text-left text-2xl text-green-500" >Saved Videos </h1>
                <div className="w-full h-fit flex flex-wrap items-center justify-between  gap-5 p-2"  >
                   {
                    [1,1,1,11,1,1,11,1].map(()=>
                      <div className=" flex flex-col w-[20vw] h-[15vw]  items-center justify-between" 
                    style={{ border:"5px solid rgb(255,255,255)", borderRadius:"15px", boxShadow:"0 0 5px rgb(0,0,0)" }}    >
                           <div className=" flex flex-col w-full h[80%]   items-center justify-center" >
                           <img src="https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg" alt="courseimg"  className="w-full h-full  object-cover object-center rounded-lg"  />
                           </div>
                           <p className="w-full text-left ml-3" >How To study in night  </p>
                      </div>
                    )
                   }
                </div>
               </div>
               <div  className=" w-full h-fit flex flex-col items-center justify-between  gap-5 "  >
                <h1 className=" w-full  text-left text-2xl text-green-500" >Saved PDF & E-Books </h1>
                <div className="w-full h-fit flex flex-wrap items-center justify-between  gap-15 p-2"  >
                   {
                    [1,1,1,11,1,1,11,1].map(()=>
                      <div className=" flex flex-col w-[20vw] h-[15vw]  items-center justify-between gap-5" >
                           <div className=" flex flex-col w-full h[80%]   items-center justify-center p-1 "    style={{ border:"5px solid rgb(255,255,255)", borderRadius:"15px", boxShadow:"0 0 5px rgb(0,0,0)" }}  >
                           <img src="https://i.pinimg.com/736x/3a/ce/8f/3ace8f15100771138990d06570d8a8a6.jpg" alt="courseimg"  className="w-full h-full  object-cover object-center rounded-lg"  />
                           </div>
                           <p className="w-full text-left" >All JavaScript Concept </p>
                      </div>
                    )
                   }
                </div>
               </div>
             
              
             </div>
    </div>
  );
};

export default MyCourse;
