import React from 'react'
import { adminNav } from '../../../utils'

const AdminTitle = ({ title }) => {
  return (
    <div>
      <h2 className='p-4 pl-0 font-bold text-emerald-700'>{title}</h2>
      <hr className='h-2 w-full rounded-full bg-gray-800' />
    </div>
  )
}

export default AdminTitle
