import React from 'react'
import Navbar from '../../Components/Navagation/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MyCourse from '../../Components/MyCourse/Mycourse'
import CartPage from '../../Components/Cart/CartPage'
import StudentLogin from '../../Components/StudentsLogin/StudentLogin'
import StudentSignUp from '../../Components/StudentsSignup/StudentSignUp'
import Notification from '../../Components/Notification/Notification'

function StudentRoute() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/mycourse' element={<MyCourse/> } ></Route>
        <Route path='/cart' element={<CartPage/> } ></Route>
        <Route path='/login' element={<StudentLogin/> } ></Route>
        <Route path='/signup' element={<StudentSignUp/> } ></Route>
        <Route path='/notification' element={<Notification/> } ></Route>
    </Routes>
    <Footer/>
   </>
  )
}

export default StudentRoute