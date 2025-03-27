import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../Components/Homepage/HomePage'
import Navbar from '../../Components/Navagation/Navbar'
import Footer from '../../Components/Footer/Footer'
import SingleCourseDetails from '../../Components/SingleCourseDetails/SingleCourseDetails'
import About from '../../Components/About/About'
import Helppage from '../../Components/HelpPage/Helppage'
import ManagementLogin from '../../AdminComponents/ManagementLogin'
import ManagementDashboard from '../../AdminComponents/ManagementHomepage'
import Text from '../../Components/Test/Text'
import ManagementHomepage from '../../AdminComponents/ManagementHomepage'

function ManagementRoutes() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/home' element={<HomePage/> } ></Route>
        <Route path='/test' element={<Text/> } ></Route>
        <Route path='/course-details' element={<SingleCourseDetails/> } ></Route>
        <Route path='/help' element={<Helppage/> } ></Route>
        <Route path='/about' element={<About/> } ></Route>
        <Route path='/login' element={<ManagementLogin/> } ></Route>
        <Route path='/p/*' element={<ManagementHomepage/> } ></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default ManagementRoutes