import React from 'react'
import { adminNav } from '../../../utils'

const Title = ({ title }) => {
  return (
    <div>
      <h1 className='p-4 pl-0 text-3xl font-bold'>{title}</h1>
      <hr className='h-2 w-full rounded-full bg-gray-800' />
    </div>
  )
}

export default Title
