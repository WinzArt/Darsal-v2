import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminNav } from '../../components'

const MainAdmin = () => {
  return (
    <div>
      MainAdmin
      <AdminNav />
      <Outlet />
    </div>
  )
}

export default MainAdmin
