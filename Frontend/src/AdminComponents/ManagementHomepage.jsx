import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navagation/Navbar";
import Footer from "../Components/Footer/Footer";
import ManagementDashboard from "./ManagementDashboard";
import ActiveStudents from "./StudentManage/ActiveStudents";
import ActiveTuitor from "./TuitorManage/ActiveTuitor";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ActiveCourses from "./ActiveCourse/ActiveCourses";
import LogoutPage from "./LogoutPage";

const sidebarListData = [
  {
    icon: <HomeIcon />,
    text: "Dashboard",
    url: "/api/v2m/p/dashboard",
    key: 1,
  },
  {
    icon: <PeopleAltIcon />,
    text: "Students Details",
    url: "/api/v2m/p/active_students",
    key: 2,
  },
  {
    icon: <PeopleAltIcon />,
    text: "Tuitors Details",
    url: "/api/v2m/p/active_tuitors",
    key: 3,
  },
  {
    icon: <BookIcon />,
    text: "Courses  Details",
    url: "/api/v2m/p/active_courses",
    key: 4,
  },
  {
    icon: <PersonAddAltIcon />,
    text: "Add Student ",
    url: "/api/v2m/p/active_students/addStudent",
    key: 5,
  },
  {
    icon: <PersonAddAlt1Icon />,
    text: "Add Tuitor ",
    url: "/api/v2m/p/active_tuitors/addTuitor",
    key: 5,
  },
  {
    icon: <AddToPhotosIcon />,
    text: "Add Course ",
    url: "/api/v2m/p/active_courses/addcourse",
    key: 5,
  },
  {
    icon: <LogoutIcon />,
    text: "Logout",
    url: "/api/v2m/p/logout",
    key: 6,
  },
];



function ManagementHomepage() {


  const navigate = useNavigate();

  const handleComponents = (url) =>{
    navigate(url);
  }
  


  return (
    <>
      <Navbar />

      <div className="mt-18 h-fit min-h-[100vh] flex items-start justify-between p-2  relative ">
        <div
          className=" flex flex-col gap-10 items-center justify-start w-[18vw] h-[88vh]   sticky top-18 rounded-xl "
          style={{
            backgroundColor: "rgb(128, 203, 196,0.35)",
            boxShadow: "0 0 5px rgba(0,0,0,0.5)",
          }}
        >
          <div className=" flex flex-col items-center justify-between w-full h-fit ">
            <div className="flex flex-col justify-center items-center w-full  h-fit p-2">
              <div className=" flex justify-center items-center w-[5vw]  h-[5vw] rounded-full  overflow-hidden ">
                <img
                  src="/logo1.png"
                  alt="/profile image"
                  className=" h-full w-full rounded-full object-cover object-top"
                />
              </div>
              <h2 className=" font-semibold text-lg md:text-2xl w-full text-center my-2 ">
                Krishna Infotech
              </h2>
            </div>

            <div className=" w-full  flex flex-col items-center justify-between h-fit ">
              <List>
                {sidebarListData?.map((data) => (
                  <ListItem key={data.key} className=" cursor-pointer">
                    <ListItemIcon>{data.icon}</ListItemIcon>
                    <ListItemText onClick={() => handleComponents(data.url)}>
                      <p>{data.text}</p>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </div>
        <div className="flex w-full h-fit min-h-[90vh] rounded-xl px-8  ">
          <Routes>
            <Route path="/dashboard" element={<ManagementDashboard />} />
            <Route path="/active_students/*" element={<ActiveStudents />} />
            <Route path="/active_tuitors/*" element={<ActiveTuitor />} />
            <Route path="/active_courses/*" element={<ActiveCourses />} />
            <Route path="/logout" element={<LogoutPage />} />

          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ManagementHomepage;
