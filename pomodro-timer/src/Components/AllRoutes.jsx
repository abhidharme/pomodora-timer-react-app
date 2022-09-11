import React from 'react'
import { Route, Routes } from "react-router-dom"
import LoginPage from '../Pages/LoginPage'
import { Timer } from '../Pages/Timer'

//Routing Component
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/timer' element={<Timer />} />
      </Routes>
    </>
  )
}
