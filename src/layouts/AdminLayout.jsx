import { Outlet } from "react-router-dom"
import Navbar from "../components/navigation/Navbar"
import Sidebar from "../components/navigation/Sidebar"
import React from 'react'

function AdminLayout() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout