
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomePage, DashBoardPage, SignUpPage, SignInPage, ForgetPassword, BooksLandingPage, Books, EditBookPage, NewBookPage, ReviewPage, UserPage, Profile, BorrowPage, VerifyUser } from '../pages'
import DefaultLayout from '../components/layouts/DefaultLayout';
import UserLayout from '../components/layouts/UserLayout';




const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages */}
        <Route path='/' element ={<DefaultLayout/>}>     
             <Route index element={<HomePage />}/>
             <Route path='/signup' element={<SignUpPage />}/>
             <Route path='/verify-user' element={<VerifyUser />}/>
             <Route path='/login' element={<SignInPage/>}/>
             <Route path='/forget-password' element={<ForgetPassword />}/>
        </Route>

        {/* private pages */}
        <Route path='/user' element={<UserLayout/>}>
             <Route index element={<DashBoardPage />}/>
             <Route path='books' element={<Books />}/>
             <Route path='new-book' element={<NewBookPage />}/>
             <Route path='edit-book' element={<EditBookPage />}/>
             <Route path='borrow-history' element={<BorrowPage />}/>
             <Route path='book-landing' element={<BooksLandingPage />}/>
             <Route path='reviews' element={<ReviewPage />}/>
             <Route path='all' element={<UserPage />}/>
             <Route path='profile' element={<Profile />}/>
        </Route>
   </Routes>
  )
}

export default AppRoutes
