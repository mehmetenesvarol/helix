import { Outlet } from "react-router-dom"
import React from 'react'

function AuthLayout() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout