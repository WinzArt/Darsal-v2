import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminNav, AdminTitle } from '../../components'

const MainAdmin = () => {
  return (
    <div className='mb-8 min-h-screen'>
      <AdminNav />
      <div className='mx-auto space-y-4 p-4 xl:container'>
        {/* <AdminTitle title='Kelola Berita' /> */}
        <Outlet />
      </div>
    </div>
  )
}

export default MainAdmin
