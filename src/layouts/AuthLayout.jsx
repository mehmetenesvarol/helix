import { Outlet } from "react-router-dom"
import AuthNavbar from "../components/navigation/AuthNavbar"
import React from 'react'

function AuthLayout() {
  return (
    <div>
      <AuthNavbar/>
      <Outlet/>
    </div>
  )
}

export default AuthLayout