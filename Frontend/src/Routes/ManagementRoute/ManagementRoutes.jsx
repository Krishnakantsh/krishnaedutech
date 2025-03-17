import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../Components/Homepage/HomePage'
import Navbar from '../../Components/Navagation/Navbar'
import Footer from '../../Components/Footer/Footer'
import Contacts from '../../Components/Contact/Contact'
import SingleCourseDetails from '../../Components/SingleCourseDetails/SingleCourseDetails'
import About from '../../Components/About/About'
import Helppage from '../../Components/HelpPage/Helppage'
import Bookstore from '../../Components/BookStore/Bookstore'
import CartPage from '../../Components/Cart/CartPage'
import Mycourse from '../../Components/MyCourse/Mycourse'
import ManagementLogin from '../../Components/ManagementLogin/ManagementLogin'

function ManagementRoutes() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/home' element={<HomePage/> } ></Route>
        <Route path='/course-details' element={<SingleCourseDetails/> } ></Route>
        <Route path='/help' element={<Helppage/> } ></Route>
        <Route path='/about' element={<About/> } ></Route>
        <Route path='/login' element={<ManagementLogin/> } ></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default ManagementRoutes