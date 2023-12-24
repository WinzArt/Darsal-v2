import { Icon } from '@iconify/react'
import React from 'react'

const Search = ({ value, onChange, placeholder }) => {
  return (
    <form className='flex items-center'>
      <label htmlFor='default-search' className='sr-only'>
        Search
      </label>
      <div className='relative text-sm'>
        <div className='pointer-events-none absolute inset-0 flex items-center ps-2'>
          <Icon icon='mdi:magnify' width='24' />
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full rounded-lg border border-transparent bg-gray-50 p-1.5 ps-8 font-semibold shadow-sm ring-2 ring-slate-500 focus:outline-none focus:ring-blue-500'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </form>
  )
}

export default Search
