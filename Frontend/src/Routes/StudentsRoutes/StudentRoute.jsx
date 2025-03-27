import React from 'react'
import Navbar from '../../Components/Navagation/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import MyCourse from '../../StudentComponents/MyCourse/Mycourse'
import CartPage from '../../StudentComponents/Cart/CartPage'
import StudentLogin from '../../StudentComponents/StudentsLogin/StudentLogin'
import StudentSignUp from '../../StudentComponents/StudentsSignup/StudentSignUp'
import Notification from '../../StudentComponents/Notification/Notification'

function StudentRoute() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/login' element={<StudentLogin/> } ></Route>
        <Route path='/signup' element={<StudentSignUp/> } ></Route>
        <Route path='/forgetpassword' element={<StudentSignUp/> } ></Route>
        <Route path='/p/notification' element={<Notification/> } ></Route>
        <Route path='/p/mycourse' element={<MyCourse/> } ></Route>
        <Route path='/p/cart' element={<CartPage/> } ></Route>
    </Routes>
    <Footer/>
   </>
  )
}

export default StudentRoute