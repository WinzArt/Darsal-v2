import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminNav, Title } from '../../components'

const MainAdmin = () => {
  return (
    <div className='mb-8 min-h-screen'>
      <AdminNav />
      <div className='container mx-auto p-4'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainAdmin
