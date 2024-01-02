import { Icon } from '@iconify/react'
import React from 'react'

const Input = ({ id, type, label, icon }) => {
  return (
    <div className='relative'>
      {/* <div className='pointer-events-none absolute inset-0 flex items-center ps-2'>
        <Icon icon='mdi:email' width='16' />
      </div> */}
      <input
        type={type}
        id={id}
        name={id}
        className='peer block w-full appearance-none border-b-[1px] border-gray-900 bg-transparent p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
        placeholder=' '
        required
      />
      <label
        for={id}
        className='absolute start-1 top-2 z-10 flex origin-[0] -translate-y-4 scale-75 transform items-center px-2 text-xs text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-2 peer-focus:text-blue-600'
      >
        <Icon icon={icon} width='1.3em' />
        {label}
      </label>
    </div>
  )
}

export default Input
