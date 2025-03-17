import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Button, TextField } from "@mui/material";

function Helppage() {
  return (
    <div className="pt-20  w-full h-fit ">
      <div className=" flex w-full items-center justify-between  h-fit p-1 gap-10 ">
        <div
          className=" flex  items-center flex-col justify-between h-[40vw] w-[30%]  shadow-lg rounded-2xl p-5"
          style={{ background: "rgb(255,255,255)" }}
        >
          <div className="flex justify-center items-center w-full  h-[50%] ">
            <div className=" flex justify-center items-center w-[15vw]  h-[15vw] rounded-full  overflow-hidden ">
              <img
                src="/logo1.png"
                alt="profile image"
                className=" h-full w-full rounded-full object-cover object-top"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center w-full  h-[50%] p-3  ">
            <h2 className=" font-semibold text-xl md:text-3xl w-full text-center my-5 ">
              Krishna Infotech
            </h2>
            <p className=" text-xl   ">
              <span className=" mr-5">
                <LocalPhoneIcon sx={{ color: "rgb(23,141,241)" }} />{" "}
              </span>
              9368238692
            </p>
            <p className=" text-xl   ">
              <span className=" mr-5">
                <EmailIcon sx={{ color: "rgb(23,141,241)" }} />{" "}
              </span>
              krishnatech@gmail.com
            </p>
          </div>
        </div>
        <div
          className=" flex  items-center flex-col justify-start h-[40vw] w-[70%] rounded-2xl gap-2 p-5  "
          style={{
            background: "rgb(255,255,255)",
            boxShadow: "0 0 5px rgb(0,0,0,0.2)",
          }}
        >
          <div className="flex justify-center items-center w-full h-1/2 ">
            <img
              src="/clipart4755430.png"
              alt="helpimage"
              className=" w-auto h-full object-bottom ojject-cover"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-full h-1/2 gap-5 mt-5">
            <h1 className=" text-4xl  text-blue-600 ">
              Are You facing any problem ?{" "}
            </h1>
            <p className=" w-[60%] mt-5 ">
              If you need instant support then use live chat option to reach us
              quickly. Our support will reply as soon as possible after you send
              us a message{" "}
            </p>
            <div className="flex  justify-center items-center w-[60%] gap-5 mt-8">
              <Button
                variant="contained"
                sx={{ backgroundColor: "rgb(35,126,38)" }}
              >
                <span></span>Start Live Chat
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "rgb(23,141,241)" }}
              >
                <span></span>Open a ticket
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" flex w-full flex-col items-center justify-between h-fit mt-10 p-5 gap-10 "
        style={{
          background: "rgb(255,255,255)",
          boxShadow: "0 0 5px rgb(0,0,0,0.2)",
        }}
      >
        <h1 className=" text-3xl">Explain Your Problem Here</h1>
        <div>
          <form action="">
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
              noValidate
              autoComplete="off"
             
            >
              <TextField
                id="outlined-basic"
                label="Enter Student Id"
                variant="outlined"
                sx={{ width:"25vw" }}
              />
              <TextField
                id="outlined-basic"
                label="Explain Issue"
                variant="outlined"
                sx={{ width:"40vw" }}
              />
             <Button variant=" contained " sx={{  backgroundColor:"rgb(23,141,241)", height:"3.6vw", fontSize:"1.5vw", fontWeight:"500", color:"white" }} >Submit</Button>
             
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Helppage;
