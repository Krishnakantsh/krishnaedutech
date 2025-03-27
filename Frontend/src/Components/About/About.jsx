import React from "react";
import { Button } from "@mui/material";
import Contacts from "../Contact/Contact";
import "./About.css";

function About() {
  return (
    <div className="p-6 w-full h-fit flex flex-col gap-6 pt-20 mx-auto  relative">
      <div className=" flex w-full items-center justify-between  h-fit p-1 gap-10 ">
        <div
          className=" flex  items-center flex-col justify-between h-[35vw] w-[30%]  shadow-lg rounded-2xl p-5"
          style={{ backgroundColor: "rgb(128, 203, 196,0.35)" }}
        >
          <div className="flex justify-center items-center w-full  h-[50%] ">
            <div className=" flex justify-center items-center w-[15vw]  h-[15vw] rounded-full  overflow-hidden ">
              <img
                src="/logo1.png"
                alt="/profile image"
                className=" h-full w-full rounded-full object-cover object-top"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-start w-full  h-[50%] p-3  ">
            <h2 className=" font-semibold text-xl md:text-3xl w-full text-center my-5 ">
              Krishna Infotech
            </h2>
            <p className=" text-xl   ">
              Contact :{" "}
              <span className=" font-semibold opacity-60 text-blue-700 ">
                {" "}
                9368238692{" "}
              </span>{" "}
            </p>
            <p className=" text-xl">
              Email :{" "}
              <span className=" font-semibold opacity-60 text-blue-700 ">
                johnparker87@gmail.com
              </span>{" "}
            </p>
          </div>
        </div>
        <div
          className=" flex  items-center flex-col justify-start h-[35vw] w-[70%] rounded-2xl gap-2  "
          style={{
            background: "rgb(255,255,255)",
            boxShadow: "0 0 5px rgb(0,0,0,0.2)",
          }}
        >
          <div className=" flex flex-col justify-start items-start text-left p-4 px-10 "  >
            <h2 className="text-3xl font-semibold text-amber-600 mb-2">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-1 mt-2 text-lg  text-justify">
              Welcome to <strong>KrishnaTech Solutions For Education</strong>, a premier
              learning technology company dedicated to revolutionizing
              education. We empower students and professionals with cutting-edge
              courses, interactive learning platforms, and industry-relevant
              skills.
            </p>
          </div>
          <div className=" flex flex-col justify-start items-start text-left p-5 px-10 "  >
            <h2 className="text-3xl font-semibold text-amber-600 mb-2">
            Our Mission
            </h2>
            <p className="text-gray-600 mb-2 mt-4 text-lg  text-justify">
            Our mission is to make quality education accessible to all by leveraging technology to create engaging and effective learning experiences.
            </p>
          </div>
          <div className="w-full  flex flex-col justify-start items-start text-left p-5 px-10 "  >
            <h2 className="text-3xl font-semibold text-amber-600 mb-2">
            Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-lg "  style={{listStyle:"none" }} >
               <li>🔹 Experienced instructors from top industries</li>
              <li>🔹 Interactive and hands-on learning approach</li>
              <li>🔹 Flexible learning options (self-paced & live)</li>
              <li>🔹 24/7 support and mentorship</li>
      </ul>
      
          </div>
        </div>
      </div>
      
      <div className=" w-full flex  items-start justify-start h-fit text-left p-10 rounded-xl text-white gap-10 " style={{ background:" rgb(0,0,0)" }}  >

     
        <div className=" w-1/2 flex flex-col items-start justify-start h-fit text-left p-10 rounded-xl text-white gap-10   "  >
        <h2 className="text-4xl font-semibold  mb-2">What We Offer</h2>
      <ul className="flex flex-col gap-5 list-disc list-inside mb-5 ">
        <li><strong>Online Courses</strong> – Industry-specific programs designed by experts</li>
        <li><strong>Live Classes</strong> – Interactive sessions with experienced educators</li>
        <li><strong>AI-Based Learning</strong> – Personalized recommendations and adaptive learning paths</li>
        <li><strong>Career Guidance</strong> – Helping students and professionals land their dream jobs</li>
        <li><strong>Certification Programs</strong> – Recognized credentials to boost career growth</li>
        <li><strong>Internship Opportunities</strong> – Hands-on experience with real-world projects</li>
        <li><strong>Corporate Training</strong> – Upskilling solutions for businesses and organizations</li>
        <li><strong>Community Forums</strong> – A collaborative space for learners and industry experts</li>
      </ul>
        </div>

        <div className=" w-1/2 h-[35vw] flex flex-col items-center justify-center  text-left p-10 rounded-xl text-white gap-10  relative "  >
            <div  className="absolute top-[5vw] left-[10vw]  w-[20vw] flex  items-start justify-start h-[20vw] text-left p-10 rounded-full text-white gap-10 " id="animecard1" style={{ background:" rgb(255,255,255)", boxShadow:"0 0 10px white", animation:"animecard1 4s linear infinite "}} ></div>
            <div  className="absolute top-[5vw] left-[10vw]  w-[20vw] flex  items-start justify-start h-[20vw] text-left p-10 rounded-full text-white gap-10 " id="animecard2" style={{ background:" rgb(255,255,255)", boxShadow:"0 0 10px white",  animation:"animecard2 4s linear infinite " }} ></div> 
            <div  className="absolute top-[5vw] left-[10vw]   w-[20vw] flex  items-start justify-start h-[20vw] text-left p-10 rounded-full text-white gap-10 " id="animecard3" style={{ background:" rgb(255,255,255)", boxShadow:"0 0 10px white",  animation:"animecard3 4s linear infinite " }} ></div>
            <div  className="absolute top-[5vw] left-[10vw]   w-[20vw] flex  items-start justify-start h-[20vw] text-left p-10 rounded-full text-white gap-10 "  id="animecard4" style={{ background:" rgb(255,255,255)", boxShadow:"0 0 10px white",  animation:"animecard4 4s linear infinite " }} ></div>
        </div>
      </div>
      
      <div className=" w-full h-fit flex justify-between items-center  rounded-2xl " style={{ background:" rgb(220,220,220)" }}   >
        <div className=" w-[40%] h-[30vw] font-semibold flex  justify-center items-center text-6xl text-center p-15  " style={ {  lineHeight:"100px"  }} >
              <h1> We provide various type of remote & on-site internship</h1>
        </div>
        <div className=" w-[60%] h-[30vw] flex justify-center items-center  "    >
          <div className=" w-fit h-[90%] flex justify-center items-center border p-3 rounded-2xl " style={{ border:"5px solid rgb(255,255,255)", backgroundColor:"rgba(255,255,255,0.3)", backdropFilter:"blur(10px)" }}   >
          <img src="/intership certi temp.png" alt="certificate image"  className=" w-auto h-full object-cover object-center rounded-2xl " />
          </div>
        </div>

      </div>

       <Contacts/>



    </div>

       
  );
}

export default About;
