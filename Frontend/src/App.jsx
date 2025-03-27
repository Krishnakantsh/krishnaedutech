import React from 'react';
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentRoute from './Routes/StudentsRoutes/StudentRoute.jsx';
import ManagementRoutes from './Routes/ManagementRoute/ManagementRoutes.jsx';
import ManagementDashboard from './AdminComponents/ManagementHomepage.jsx';
import ManagementHomepage from './AdminComponents/ManagementHomepage.jsx';
import TuitorRoute from './Routes/TuitorRoute/TuitorRoute.jsx';

function App() {
  return (
         <BrowserRouter>
         <Routes>
           <Route path="/api/v2m/*"  element={<ManagementRoutes/>} />
           <Route path="/api/v2t/*"  element={<TuitorRoute/>} />
           <Route path="/api/v2s/*"  element={<StudentRoute/>} />
         </Routes>
        </BrowserRouter>
  )
}

export default App
