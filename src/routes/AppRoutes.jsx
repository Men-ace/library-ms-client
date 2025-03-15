
import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import DashBoardPage from '../pages/dashboard/DashBoardPage';
// import HomePage from '../pages/home/HomePage';
import { HomePage, DashBoardPage } from '../pages'

const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages */}
      <Route path='/' element={<HomePage/>} />

        {/* private pages */}
        <Route path='/user' element={<DashBoardPage/>} />
   </Routes>
  )
}

export default AppRoutes
