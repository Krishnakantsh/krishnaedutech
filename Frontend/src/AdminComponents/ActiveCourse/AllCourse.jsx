import React from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CourseCard from "./CourseCard";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';


const AllCourse = () => {
  const [name, setName] = React.useState("");
  const [feature, setFeature] = React.useState("");
  const navigate = useNavigate();

  const handleChange2 = (event) => {
    setName(event.target.value);
  };
  
  const handleChange1 = (event) => {
    setFeature(event.target.value);
  };
  
  const handleaddnewcourse = () => {
      navigate("/api/v2m/p/active_courses/addcourse")
  }


  return (
    <>
    <div className=" flex items-center justify-between gap-5 w-full">
    <div className=" w-1/4 flex flex-col items-center justify-center border border-gray-300 rounded-sm h-fit bg-white py-5 ">
      <div className="flex  items-center justify-between border border-gray-200 shadow-md rounded-sm p-4">
        <input
          type="text"
          placeholder=" Enter course id"
          className=" outline-0"
        />
        <SearchIcon />
      </div>
    </div>
    <div className=" w-3/4 flex  items-center justify-between border border-gray-300 rounded-sm h-fit bg-white py-5 p-5">
      <FormControl sx={{ width: "10vw" }}>
        <InputLabel id="demo-simple-select-label">Feature</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={feature}
          label="Feature"
          onChange={handleChange1}
        >
          <MenuItem value={"featured"}>Featured</MenuItem>
          <MenuItem value={"newcourse"}>Newest Course</MenuItem>
          <MenuItem value={"lth"}>Low To High</MenuItem>
          <MenuItem value={"htl"}>High To Low</MenuItem>
          <MenuItem value={"popular"}>Popular</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" type="submit" onClick={handleaddnewcourse}  >
        Add Course
      </Button>
    </div>
  </div>
    <div className=" flex items-start justify-between gap-5 w-full">
    <div className="w-1/4 flex flex-col items-center justify-center gap-5  h-fit py-5">
      <div className="w-full flex flex-col items-center justify-center border border-gray-300 rounded-sm bg-white ">
        <div className="flex items-center justify-between w-full p-3 border-b border-gray-300  ">
          <h2>Filters</h2>
          <Button variant="contained" type="submit">
            Clear All
          </Button>
        </div>
        <div className=" flex flex-wrap items-start justify-start p-3 gap-3 text-sm">
          <p
            className="p-1 border border-gray-300 rounded-4xl px-5"
            style={{ backgroundColor: "rgba(242, 247, 250, 0.422)" }}
          >
            Java <ClearIcon sx={{ fontSize: "15px" }} />
          </p>
          <p
            className="p-1 border border-gray-300 rounded-4xl px-5"
            style={{ backgroundColor: "rgba(242, 247, 250, 0.422)" }}
          >
            Active<ClearIcon sx={{ fontSize: "15px" }} />
          </p>
          <p
            className="p-1 border border-gray-300 rounded-4xl px-5"
            style={{ backgroundColor: "rgba(242, 247, 250, 0.422)" }}
          >
            1001 - 2000 <ClearIcon sx={{ fontSize: "15px" }} />
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center border border-gray-300 rounded-sm bg-white ">
        <div className="flex items-center justify-between w-full p-3 border-b border-gray-300  ">
          <h2>Status</h2>
        </div>
        <div className=" flex flex-wrap items-start justify-start p-3 gap-3 text-sm">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
           
            >
              <FormControlLabel
                value="active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="inactive"
                control={<Radio />}
                label="Inactive"
              />
            </RadioGroup>
          </FormControl>
        </div>

      </div>
      <div className="w-full flex flex-col items-center justify-center border border-gray-300 rounded-sm bg-white ">
        <div className="flex items-center justify-between w-full p-3 border-b border-gray-300  ">
          <h2>Price</h2>
        </div>
        <div className=" flex flex-col items-start justify-start p-3 gap-3 text-sm">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="row-radio-buttons-group"
             
            >
              <FormControlLabel
                value="500_1000"
                control={<Radio />}
                label="500 - 1000"
              />
         
              <FormControlLabel
                value="1001_2000"
                control={<Radio />}
                label="1001 - 2000"
              />
              <FormControlLabel
                value="2001_5000"
                control={<Radio />}
                label="2001 - 5000"
              />
              <FormControlLabel
                value="5001_10000"
                control={<Radio />}
                label="5001 - 10000"
              />
              <FormControlLabel
                value="10001_20000"
                control={<Radio />}
                label="10001 - 20000"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center border border-gray-300 rounded-sm bg-white ">
        <div className="flex items-center justify-between w-full p-3 border-b border-gray-300  ">
          <h2>Tuitors</h2>
        </div>
        <div className=" flex flex-col items-start justify-start p-3 gap-3 text-sm w-full ">
        <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Choose Tuitor</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={name}
      label="Name"
      onChange={handleChange2}
    >
      <MenuItem value={"johndew"} >John Dew</MenuItem>
      <MenuItem value={"krishna"} >Krishna</MenuItem>
      <MenuItem value={"priyanshi"}>Priyanshi</MenuItem>
      <MenuItem value={"harisadewe"}>Haris Adewe</MenuItem>
    
    </Select>
  </FormControl>
        </div>
      </div>
    </div>
    <div className=" w-3/4 flex flex-wrap items-start justify-between  rounded-sm h-fit gap-3 py-5 " >
         {
          [1,11,1,1,1,1,1,1,1].map(()=>
          <CourseCard/>
          )
         }
    </div>
  </div>

  </>
  )
}

export default AllCourse