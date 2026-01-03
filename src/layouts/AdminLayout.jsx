import { Outlet } from "react-router-dom"
import AdminNavbar from "../components/navigation/AdminNavbar"
import AdminSidebar from "../components/navigation/AdminSidebar"
import React from 'react'

function AdminLayout() {
  return (
    <div>
      <AdminNavbar/>
      <AdminSidebar/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout