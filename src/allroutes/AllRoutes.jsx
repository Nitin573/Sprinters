import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/dashboard/DashBoard'
import UploadContest from '../pages/uploadContest/UploadContest'
import UpdateSupport from '../pages/updateSupport/UpdateSupport'
import UpdateNotification from '../pages/updateNotification/UpdateNotification'
import Login from '../component/login/Login'
import ClientTestimonials from '../pages/uploadtestimo/ClientTestimonials'


const AllRoutes = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/upload-contest-details' element={<UploadContest/>}/>
        <Route path='/change-contact-support' element={<UpdateSupport/>}/>
        <Route path='/update-notification' element={<UpdateNotification/>}/>
        <Route path='/upload-client-testimonials' element={<ClientTestimonials/>}/>
        <Route path='/login' element={<Login/>}/>
      
    </Routes>
   </>
  )
}

export default AllRoutes
