
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomePage, DashBoardPage, SignUpPage, SignInPage, ForgetPassword, BooksLandingPage } from '../pages'
import DefaultLayout from '../components/layouts/DefaultLayout';
import UserLayout from '../components/layouts/UserLayout';



const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages */}
        <Route path='/' element ={<DefaultLayout/>}>     
             <Route index element={<HomePage />}/>
             <Route path='/signup' element={<SignUpPage />}/>
             <Route path='/login' element={<SignInPage/>}/>
             <Route path='/forget-password' element={<ForgetPassword />}/>
        </Route>

        {/* private pages */}
        <Route path='/user' element={<UserLayout/>}>
        <Route index element={<DashBoardPage />}/>
        
        </Route>

   </Routes>
  )
}

export default AppRoutes
