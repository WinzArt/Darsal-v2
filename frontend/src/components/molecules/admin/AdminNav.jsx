import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { adminNav } from '../../../utils'
import { logoDarsal } from '../../../assets'

const AdminNav = () => {
  return (
    <header className='relative z-10 h-fit'>
      <nav className='flex h-16 items-center justify-between px-8 drop-shadow-md'>
        {/* == == == Navigation == == == */}
        <div className=''>
          <ul className='flex flex-wrap items-center text-center font-medium'>
            {adminNav.map((nav) => (
              <li key={nav.id} className='me-2 cursor-pointer'>
                <NavLink
                  id={nav.id}
                  to={nav.to}
                  className='tabs group flex items-center rounded-t-lg p-2 hover:bg-gray-400'
                  end
                >
                  <div className='flex w-fit items-center text-gray-500 transition duration-75 group-hover:text-gray-900'>
                    <Icon icon={nav.icon} width='24' />
                    <span className='ml-3'>{nav.title}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* == == == Profile Detail == == == */}
        <div className='group relative flex items-center'>
          <div>
            <button
              type='button'
              className=' flex rounded-full bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
              aria-expanded='false'
              data-dropdown-toggle='dropdown-user'
            >
              <span className='sr-only'>Open user menu</span>
              <img
                className='h-8 w-8 rounded-full bg-white'
                src={logoDarsal}
                alt='user photo'
              />
            </button>
          </div>

          <div className='absolute right-0 top-14 hidden w-60 max-w-sm rounded-lg border border-gray-200 bg-white py-10 opacity-0 shadow group-focus-within:block group-focus-within:opacity-100'>
            <div className='flex flex-col items-center gap-4'>
              <img
                className='h-24 w-24 rounded-full shadow-lg drop-shadow-lg'
                src={logoDarsal}
                alt='Bonnie image'
              />
              <h5 className='text-xl font-medium'>Bonnie Green</h5>
              <p className=''>Visual Designer</p>
              <hr className='w-full border-black' />
              <a href='#' className='button flex items-center gap-2'>
                Logout <Icon icon='mdi:logout-variant' width='24' />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <hr className='-mt-3 w-full rounded-full border-2 border-gray-500' />
    </header>
  )
}

export default AdminNav
