import { Button } from '@mui/material';
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AddNewCourse = () => {

  const [file, setFile] = useState(null);
  const [age, setAge] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handledurationChange = (event) => {
    setDuration(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <>
        <div className=" flex items-start justify-between gap-5 w-full">
          <form action=""  className=" flex items-start justify-between gap-5 w-full" >
         <div className=" w-1/4 h-[38vw] flex flex-col items-center justify-between border border-gray-300 rounded-sm  bg-white  ">
           <div className="flex h-4/6 w-full items-center justify-between border-b border-gray-200 p-4">
           {
            file ? <img src={file} alt="courseImg" className=' h-full w-full rounded-sm object-center object-cover'  /> : <img src="https://i.pinimg.com/736x/49/e7/36/49e736534ee5b60bd588a2bda2873ab9.jpg" alt="courseImg" className=' h-full w-full rounded-sm object-center object-cover'  />
           }
           
           </div>
           <div className="flex flex-col h-2/6 w-full items-start justify-between gap-3 p-4">
              <input
                  id="file"
                  type="file"
                  required
                  onChange={handleFileChange}
                  class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  style={{
                    boxShadow:
                      "  inset -3px -3px 5px rgba(0,0,0,0.23), inset 3px 3px 5px rgba(0,0,0,0.23)",
                  }}
                />
                <Button variant='contained' fullWidth sx={{ backgroundColor:"#463ACB"}} >Add Course</Button>
                <Button variant='contained' fullWidth sx={{ backgroundColor:"rgb(255,0,0)"}} >Reset</Button>
  
                
           </div>
         </div>
         <div className=" w-3/4 flex flex-wrap items-start justify-between rounded-sm py-5 bg-white    ">
 
         <div class="mb-6 w-full   px-3  flex flex-col items-start justify-start">
              <input
                class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                placeholder="Course Title"
               
              />
        </div>

        <div class="mb-6 w-full md:w-1/2 px-3  flex flex-col items-start justify-start">
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={10}>Active</MenuItem>
          <MenuItem value={20}>Inactive</MenuItem>
        </Select>
      </FormControl>
        </div>

        <div class="mb-6 w-full md:w-1/2 px-3  flex flex-col items-start justify-start">
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Duration"
          onChange={handledurationChange}
        >
          <MenuItem value={"1m"}>1 Month</MenuItem>
          <MenuItem value={"2m"}>2 Month</MenuItem>
          <MenuItem value={"3m"}>3 Month</MenuItem>
          <MenuItem value={"6m"}>6 Month</MenuItem>
          <MenuItem value={"1y"}>1 Year</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div class="mb-6 w-full px-3  flex flex-col items-start justify-start">
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tuitor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Tuitor"
          defaultValue='Choose Tuitor'
          onChange={handleChange}
        >
          <MenuItem value={10}>Choose Tuitor</MenuItem>
          <MenuItem value={10}>John Dew Sir</MenuItem>
          <MenuItem value={20}>Krishna Sir</MenuItem>
          <MenuItem value={20}>Priyanshi Ma'am</MenuItem>
          <MenuItem value={20}>Hemant Sir</MenuItem>
        </Select>
      </FormControl>
        </div>
         <div class="mb-6 w-full  px-3  flex flex-col items-start justify-start">
       
         <label class="block text-gray-700 text-sm  mb-2" for="lastname">
         Choose Start Date
              </label>
              <input
                class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                type="date"
                required
              />
        </div>
        <div class="mb-6 w-full md:w-1/3 px-3  flex flex-col items-start justify-start">
       
       <label class="block text-gray-700 text-sm  mb-2" for="lastname">
            Actual Price
            </label>
            <input
              class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder='$ 16'
              required
            />
      </div>
      <div class="mb-6 w-full md:w-1/3 px-3  flex flex-col items-start justify-start">
       
       <label class="block text-gray-700 text-sm  mb-2" for="lastname">
            Discounted Price
            </label>
            <input
              class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder='$ 12'
              required
            />
      </div>
      <div class="mb-6 w-full md:w-1/3 px-3  flex flex-col items-start justify-start">
       
       <label class="block text-gray-700 text-sm  mb-2" for="lastname">
             Discounted Percent
            </label>
            <input
              class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder='Example : 10%'
              required
            />
      </div>

         </div>
         </form>
       </div>
  
    </>
  )
}

export default AddNewCourse