import { Button } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const recentStudent =[
  {
    sid:1,
    name:"Krishna Kant Sharma",
    email:"krishnakantsharma560@gmail.com",
    url:""
  },
  {
    sid:2,
    name:"Kartik",
    email:"kartik60@gmail.com",
    url:""
  },
  {
    sid:1,
    name:"Yash",
    email:"yash@gmail.com",
    url:""
  },
  {
    sid:1,
    name:"Arti",
    email:"arti60@gmail.com",
    url:""
  },
  {
    sid:1,
    name:"Ajay Sharma",
    email:"ajaysharma@gmail.com",
    url:""
  },
  
]


const RecentTuitors = () => {

  const navigate = useNavigate();

  const handleViewTuitor = () => {
    navigate("/api/v2m/p/active_tuitors/:id");
  }

   const handleEditTuitorDetails = () =>{
    navigate("/api/v2m/p/active_tuitors/editTuitor");
   }
  


  return (
    <div className=" flex flex-col shadow-lg  w-full bg-white  rounded-md p-5 h-full"  >
            <div className=" flex items-center justify-between w-full border-b-1 border-b-blue-400 pb-2"  >
            <h1 className=" font-semibold text-xl"  >Recent Tuitors</h1>
            <div className=" flex items-center justify-between " >
                <Button variant="outlined"  >View All</Button>       
            </div>
          </div>
          <div className="flex  flex-col items-start justify-start h-fit w-full overflow-x-auto "
          >
             <div className="w-full flex flex-col items-start justify-between gap-2   "  >
             
                      <div className=" w-full flex items-center justify-between gap-8 px-5 py-1 text-lg " style={{  background:"rgba(182, 184, 232, 0.484)"}}  >
                        <div className="text-left w-70 " >Details</div>
                        <div className="text-left w-10" >View</div>
                        <div className="text-left w-10" >Edit</div>
                        <div className="text-left w-10" >Delete</div>
                      </div>
                     {
                      recentStudent?.map((data)=>
                      
                        <div key={data.sid}  className=" w-full flex items-center justify-between gap-8 px-2 py-1 text-lg border-b-1 border-b-blue-400 " >
                        <div className="flex items-center justify-start  text-left w-70  gap-2" >
                         <div className="flex items-center justify-center  h-10 w-10 rounded-full shadow-lg "  >
                            <img src="/logo1.png" alt="profileImg" className=" h-full w-full  object-cover object-top rounded-full"  />
                        </div>
                        <div className=" flex flex-col items-start justify-start w-auto h-full" >
                          <h2 className=" font-normal text-md"  >{data.name}</h2>
                          <p className=" opacity-70 text-sm" >{data.email}</p>
                        </div>
                        </div>
                        <div className="text-left w-10" >
                          <div className="flex  items-center justify-center  h-8  w-8 rounded-full bg-blue-200 text-blue-500" onClick={handleViewTuitor} >
                                <VisibilityIcon fontSize="5px" />
                          </div>
                        </div>
                        <div className="text-left w-10" >
                        <div className="flex  items-center justify-center h-8 w-8 rounded-full bg-green-200 text-green-500" onClick={handleEditTuitorDetails}  >
                            <EditIcon fontSize="5px" />
                            </div>
                        </div>
                        <div className="text-left w-10" >
                        <div className="flex  items-center justify-center h-8 w-8 rounded-full bg-red-200 text-red-500" >
                            <DeleteIcon  fontSize="5px" />
                            </div>
                        </div>
                      </div>
                      )
                     }
                 
                  
             </div>
          </div>
        </div>
  )
}


export default RecentTuitors