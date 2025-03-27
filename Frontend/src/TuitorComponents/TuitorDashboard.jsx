import React, { useEffect, useState } from "react";
import { Button, Input } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TuitorDashboard = () => {
  const [data, setData] = useState();
  const [days, setDays] = useState();

  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthdata = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const thismonthDays = new Date(year, month, 0).getDate();
    setData(month - 1);
    setDays(thismonthDays);
  };

  const DateComponent = () => {
    return (
      <>
        {Array.from({ length: days }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-[3vw] w-[3vw] rounded-sm border border-gray-300 shadow-lg"
          >
            <p>{i + 1}</p>
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    monthdata();
  }, []);


  const [status, setStatus] = React.useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start h-fit px-5 gap-5 mt-18 pt-3 ">
      <div className=" w-full flex items-start justify-between gap-5 ">
        <div className=" flex flex-col items-center justify-between h-fit w-1/4 p-5 bg-white border border-gray-300 gap-8">
          <div className=" h-[10vw] w-[10vw] flex items-center justify-center rounded-full shadow-2xl">
            <img
              src="/girlstudent.png"
              alt="tuitorProfileImg"
              className=" h-full w-full object-top object-cover rounded-full"
            />
          </div>
          <div className=" w-full flex flex-col items-center justify-between h-fit gap-5">
            <h1 className=" text-2xl text-blue-700">Priyanshi</h1>
            <h2>Bachelor Of Technology ( B-Tech ) </h2>
            <p className=" text-md">
              Contact No. :{" "}
              <span className=" text-lg font-semibold text-purple-700 ">
                9368238692
              </span>
            </p>
            <p>
              Email Id :{" "}
              <span className=" text-lg font-semibold text-purple-700 ">
                priyanshi@gmail.com
              </span>
            </p>
          </div>
          <div className=" w-full flex items-center justify-center h-fit gap-10">
            <Button variant="contained" sx={{ backgroundColor: "#463ACB" }}>
              Log Out
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgb(255,0,0)" }}
            >
              Edit Details
            </Button>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between h-fit w-3/4  gap-5">
          <div className=" w-full p-5 flex flex-col items-start justify-between border border-gray-300 bg-white h-fit gap-10 text-lg  ">
            <h1 className=" w-[60%] flex items-center justify-between">
              <span className="w-1/4  text-left ">Joined Date</span>
              <span className="w-1/4">:</span>
              <span className=" text-blue-800 w-1/2  text-left  ">
                02 Mar 2025
              </span>
            </h1>
            <h1 className=" w-[60%] flex items-center justify-between">
              <span className="w-1/4 text-left ">Bond Period</span>
              <span className="w-1/4">:</span>
              <span className=" text-blue-800 w-1/2  text-left  ">2 Years</span>
            </h1>
            <h1 className=" w-[60%] flex items-center justify-between">
              <span className="w-1/4 text-left ">Highest Education</span>
              <span className="w-1/4">:</span>
              <span className=" text-blue-800 w-1/2  text-left  ">
                Bachelor Of Technology
              </span>
            </h1>
            <h1 className=" w-[60%] flex items-center justify-between">
              <span className="w-1/4 text-left ">Skills</span>
              <span className="w-1/4">:</span>
              <span className=" text-blue-800 w-1/2   text-left  ">
                Proficient in Java, Python, Ruby, Operating System
              </span>
            </h1>
          </div>
          <div className=" w-full  flex  items-start justify-between  h-fit gap-10 text-lg  ">
            <div className=" w-full md:w-1/2 p-5 flex flex-col items-start justify-between border border-gray-300 bg-white h-fit gap-10 text-lg  ">
              <h1>Upload Video</h1>
              <div className="w-full flex items-start justify-start gap-10">
                <Input placeholder="Choose Video" type="file" />
                <Button variant="outlined" color="success">
                  Upload Video
                </Button>
              </div>
            </div>
            <div className=" w-full md:w-1/2 p-5 flex flex-col items-start justify-between border border-gray-300 bg-white h-fit gap-10 text-lg  ">
              <h1>Upload Pdf/Docs/Etc...</h1>
              <div className="w-full flex items-start justify-start gap-10">
                <Input placeholder="Choose File" type="file" />
                <Button variant="outlined" color="success">
                  Upload File
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start h-fit bg-white p-5 gap-5  border border-gray-300 ">
        <h1 className=" pb-3 border-b border-gray-300 w-full text-left text-lg">
          Attendence Details
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2  items-center justify-between h-fit gap-2 ">
          <div className=" flex flex-col items-start justify-start  gap-3 border-r border-gray-300 w-full h-fit">
            <p>{monthName[data]}, 2025</p>
            <div className=" w-full flex flex-wrap items-center justify-start pr-3 gap-5 mt-5">
              <DateComponent />
            </div>
          </div>
          <div className=" flex flex-col items-center justify-between  gap-3  w-full h-fit">
            <div className="flex items-center justify-between gap-5 w-full h-fit  ">
              <div className=" flex flex-col items-center justify-between w-1/2 py-5 px-2 h-fit rounded-sm border border-gray-300 gap-5">
                <h1 className=" text-2xl ">Total Attendence This Month</h1>
                <p className="text-4xl ">18</p>
              </div>
              <div className=" flex flex-col items-center justify-between w-1/2 p-5 h-fit rounded-sm border border-gray-300 gap-5">
                <h1 className=" text-2xl ">Total Salary This Month</h1>
                <p className="text-4xl ">{18 * 1120}</p>
              </div>
            </div>
            <div className="flex flex-col  items-start justify-between gap-5 w-full h-fit">
              <h1 className=" text-xl">Today Status </h1>
              <div className="flex items-center justify-between gap-5 w-full h-fit">
                <form action="" className="flex items-center justify-between gap-5 w-full h-fit"  >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Status"
                      onChange={handleStatusChange}
                    >
                      <MenuItem value={"present"}>Present</MenuItem>
                      <MenuItem value={"absent"}>Absent</MenuItem>
            
                    </Select>
                  </FormControl>
                  <Button variant="contained" sx={{ backgroundColor :"#463ACB", height:"3vw"}}  type="submit" >Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start h-fit bg-white p-5 gap-5  border border-gray-300 ">
        <h1 className=" pb-3 border-b border-gray-300 w-full text-left text-lg">
          My Videos
        </h1>
        <div className="w-full flex flex-wrap items-start justify-start h-fit gap-8">
          {[1, 1, 1, 1, 1, 1].map(() => (
            <div className="h-[15vw] w-[22vw] flex flex-col items-start justify-between shadow-xl rounded-sm border border-gray-300 gap-2 p-3">
              <div className="w-full h-[90%] flex items-center justify-center ">
                <img
                  src="https://i.pinimg.com/736x/71/dc/3b/71dc3b11620820b6ba163280e66950c9.jpg"
                  alt="videothumbnail"
                  className="rounded-sm h-full w-full object-cover object-bottom"
                />
              </div>
              <p>How to create Spring Boot Project </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start h-fit bg-white p-5 gap-5  border border-gray-300 ">
        <h1 className=" pb-3 border-b border-gray-300 w-full text-left text-lg">
          My Other Files
        </h1>
        <div className="w-full flex flex-wrap items-start justify-start h-fit gap-2 ">
          {[1, 1].map(() => (
            <div className="h-[25vw] w-[18vw] flex flex-col items-start justify-between shadow-xl rounded-sm border border-gray-300 gap-2 p-3">
              <div className="w-full h-full flex items-center justify-center ">
                <img
                  src="https://i.pinimg.com/736x/2f/a0/52/2fa0527b78e39e432b37f9312876195b.jpg"
                  alt="videothumbnail"
                  className="rounded-sm h-full w-full object-cover object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TuitorDashboard;
