import { Button, OutlinedInput } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

function StudentSignUp() {
  return (
    <div
      className=" flex items-center justify-center  mt-17 w-full h-[43vw]"
      style={{ backgroundColor: "rgb(210,210,210)" }}
    >
      <div
        className=" flex items-center justify-between h-[30vw] w-[50vw]  rounded-2xl  gap-5  overflow-hidden"
        style={{
          boxShadow:
            "-5px -5px 10px rgb(255,255,255), 5px 5px 10px rgb(0,0,0,0.3)",
          backgroundColor: "rgb(128, 203, 196,0.35)",
        }}
      >
        <div className=" w-[40%] h-full p-5 flex flex-col items-center justify-start relative overflow-visible" >

          <div className=" absolute -bottom-15 -right-15 w-[20vw]"  >
            <img src="/graphic1.png" alt="registerGraphic" />
          </div>
          <div className="h-[5vw] w-[5vw] rounded-full ">
            <img
              src="/logo1.png"
              alt="logoImg"
              className=" w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <h2 className="  font-bold text-xl mt-3 ">Learning Strategy</h2>
            <p className="  font-semibold text-lg mt-1 ">Made Easy !</p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-between w-[60%]  h-full  rounded-2xl  p-5"
          style={{ backgroundColor: "rgb(255,255,255)" }}
        >
          <div className=" w-full flex items-center justify-center gap-10 h-fit">
            <div
              className="  flex gap-3 items-center justify-center border rounded-2xl p-2  px-5 text-lg "
              style={{ border: "2px solid rgb(128, 203, 196)" }}
            >
              <span>
                <GoogleIcon color="success" />
              </span>{" "}
              Google
            </div>
            <div
              className="  flex gap-3 items-center justify-center border rounded-2xl p-2 px-5 text-lg"
              style={{ border: "2px solid rgb(128, 203, 196)" }}
            >
              <span>
                <GitHubIcon />
              </span>{" "}
              Gihub
            </div>
          </div>
          <h3 className="  w-full  text-center font-semibold ">
            ---------------------- Or --------------------
          </h3>
          <div className=" flex flex-col w-full items-center justify-between">
            <form
              action=""
              className=" flex flex-col w-full items-center justify-between gap-8"
            >
              <OutlinedInput
                placeholder="Fullname"
                sx={{
                  boxShadow:
                    "inset 3px 3px 8px rgb(0,0,0,0.5), inset -4px -4px 8px rgb(255,255,255) ",
                  borderRadius: "20px",
                  width: "75%",
                }}
              />
              <OutlinedInput
                placeholder="Email"
                sx={{
                  boxShadow:
                    "inset 3px 3px 8px rgb(0,0,0,0.5), inset -4px -4px 8px rgb(255,255,255) ",
                  borderRadius: "20px",
                  border: "none",
                  width: "75%",
                }}
              />
              <OutlinedInput
                placeholder="Phone"
                sx={{
                  boxShadow:
                    "inset 3px 3px 8px rgb(0,0,0,0.5), inset -4px -4px 8px rgb(255,255,255) ",
                  borderRadius: "20px",
                  border: "none",
                  width: "75%",
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "75%",
                  borderRadius: "30px",
                  backgroundColor: "rgb(4, 105, 168)",
                }}
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSignUp;

