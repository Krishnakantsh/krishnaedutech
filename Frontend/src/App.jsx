import React from 'react';
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentRoute from './Routes/StudentsRoutes/StudentRoute.jsx';
import ManagementRoutes from './Routes/ManagementRoute/ManagementRoutes.jsx';

function App() {
  return (
         <BrowserRouter>
         <Routes>
           <Route path="/api/v2m/*"  element={<ManagementRoutes/>} />
           <Route path="/api/v2s/*"  element={<StudentRoute/>} />
         </Routes>
        </BrowserRouter>
  )
}

export default App
