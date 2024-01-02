import { Icon } from '@iconify/react'
import React from 'react'

const Search = ({ value, onChange, placeholder }) => {
  return (
    <form className='flex items-center'>
      <label htmlFor='default-search' className='sr-only'>
        Search
      </label>
      <div className='relative text-xs'>
        <div className='pointer-events-none absolute inset-0 flex items-center ps-2'>
          <Icon icon='mdi:magnify' width='1.5em' />
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full rounded-md border border-transparent bg-slate-100 p-2 py-1 ps-8 font-semibold shadow-sm ring-[1px] ring-slate-500 ring-offset-1 focus:outline-none focus:ring-blue-500'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </form>
  )
}

export default Search
