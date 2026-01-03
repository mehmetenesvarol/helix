import { Outlet } from "react-router-dom"
import PublicNavbar from "../components/navigation/PublicNavbar"
import PublicSidebar from "../components/navigation/PublicSidebar"
import React from 'react'

function PublicLayout() {
  return (
    <div>
      <PublicNavbar/>
      <PublicSidebar/>
      <Outlet/>
    </div>
  )
}

export default PublicLayout