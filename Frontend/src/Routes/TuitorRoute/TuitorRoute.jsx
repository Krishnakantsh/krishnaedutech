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
import TuitorLogin from '../../TuitorComponents/TuitorLogin'
import TuitorRegister from '../../TuitorComponents/TuitorRegister'
import TuitorDashboard from '../../TuitorComponents/TuitorDashboard'

function TuitorRoute() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/login' element={<TuitorLogin/> } ></Route>
        <Route path='/register' element={<TuitorRegister/> } ></Route>
        <Route path='/p/dashboard' element={<TuitorDashboard/> } ></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default TuitorRoute