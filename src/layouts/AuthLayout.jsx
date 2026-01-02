import { Outlet } from "react-router-dom"
import Navbar from "../components/navigation/Navbar"
import React from 'react'

function AuthLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default AuthLayout