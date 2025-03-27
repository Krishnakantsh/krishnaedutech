import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

const EditTuitor = () => {



  return (
    <div className=" flex flex-col items-center justify-between w-full gap-5 f-fit">
      <h1 className=" w-full flex items-center justify-start text-left text-2xl">
        Add New Tuitor
      </h1>
      <form
        action=""
        className=" flex flex-col items-center justify-between w-full  h-fit "
      >
        <div className=" grid grid-cols-2 items-center justify-start w-full  h-fit gap-5 ">
          <div
            className=" w-full flex flex-wrap items-start p-3 justify-start bg-white h-[40vw]  rounded-md  "
            style={{ backgroundColor: "rgb(210,210,210)" }}
          >
            <div class="mb-6 w-full md:w-1/2 px-3  flex flex-col items-start justify-start">
              <label class="block text-gray-700 text-sm  mb-2" for="firstname">
                First Name
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                placeholder="Krishna"
                name="firstName"
                style={{
                  boxShadow:
                    "  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)",
                }}
              />
            </div>

            <div class="mb-6 w-full md:w-1/2 px-3  flex flex-col items-start justify-start">
              <label class="block text-gray-700 text-sm  mb-2" for="lastname">
                Last Name
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                name="lastName"
                placeholder="Gupta"
                style={{
                  boxShadow:
                    "  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)",
                }}
              />
            </div>

            <div class="mb-6 w-full  px-3  flex flex-col items-start justify-start">
              <label class="block text-gray-700 text-sm  mb-2" for="lastname">
                Date Of Birth
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="date"
                placeholder="01/Jan/2000"
                name="dob"
                style={{
                  boxShadow:
                    "  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)",
                }}
              />
            </div>

            <div class="mb-6 w-full px-3  flex flex-col items-start justify-start">
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ color: "black" }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="male"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  name="female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  name="male"
                />
              </RadioGroup>
            </div>

            <div class="mb-6 w-full md:w-1/2 px-3  flex flex-col items-start justify-start">
              <label class="block text-gray-700 text-sm  mb-2" for="lastname">
                Email
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                style={{
                  boxShadow:
                    "  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)",
                }}
              />
            </div>
            <div class="mb-6 w-full md:w-1/2 px-3  flex flex-col items-start justify-start">
              <label class="block text-gray-700 text-sm  mb-2" for="lastname">
                Phone No.
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="number"
                maxLength={10}
                minLength={10}
                name="phone"
                placeholder="9368838645"
                style={{
                  boxShadow:
                    "  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)",
                }}
              />
            </div>
            <div class="mb-6 w-full md:w-1/2 px-3  flex flex-col items-start justify-start">
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ color: "black" }}
              >
                Status
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="active"
              >
                <FormControlLabel
                  value="active"
                  control={<Radio />}
                  label="Active"
                  name="active"
                />
                <FormControlLabel
                  value="blocked"
                  control={<Radio />}
                  label="Blocked"
                  name="blocked"
                />
              </RadioGroup>
            </div>
          </div>

          <div
            className=" w-full flex flex-wrap items-start p-3 justify-between bg-white h-[40vw] rounded-md "
            style={{ backgroundColor: "rgb(210,210,210)" }}
          >
             <div class="mb-6 w-full  px-3  flex flex-col items-start justify-start">
              <label class="block text-gray-700 text-sm  mb-2" for="lastname">
                Experience(In Years)
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                name="experience"
                placeholder="2"
                style={{
                  boxShadow:
                    "  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)",
                }}
              />
            </div>
            <div class="mb-6 w-full  px-3  flex flex-col items-start justify-start">
              <label class="block text-gray-700 text-sm  mb-2" for="lastname">
                Skills 
              </label>
              <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                name="skills"
                placeholder="Spring Boot , Java, Python etc..."
                style={{
                  boxShadow:
                    "  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)",
                }}
              />
            </div>
            <div class="mb-6 w-full px-3  flex flex-col items-start justify-start">
              <label className="block text-gray-700 text-md  mb-2" for="file" >
                Choose File
              </label>
              <input
                  id="file"
                  type="file"
                  placeholder="Choose File"
                  class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  style={{
                    boxShadow:
                      "  inset -3px -3px 5px rgb(255,255,255), inset 3px 3px 5px rgba(0,0,0,0.45)",
                  }}
                />
        
            </div>
            <div className=" w-full flex items-center justify-between gap-5 " >
               <Button variant="outlined" type="submit" color="success" fullWidth sx={{ border:"1px solid green", fontWeight:"500"}}  >Register Now</Button>
               <Button variant="outlined" type="reset" color="error" fullWidth sx={{ border:"1px solid red", fontWeight:"500"}} >Reset</Button>
            </div>
          </div>
        </div>
       
      </form>
    </div>
  );
};



export default EditTuitor