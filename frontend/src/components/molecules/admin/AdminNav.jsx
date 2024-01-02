import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { adminNav } from '../../../utils'
import { logoDarsal } from '../../../assets'

const AdminNav = () => {
  return (
    <header className='relative z-10 h-fit drop-shadow-md'>
      <nav className='flex items-baseline justify-between px-4'>
        {/* == == == Navigation == == == */}
        <ul className='flex flex-wrap items-center gap-px text-center font-medium'>
          {adminNav.map((nav) => (
            <li key={nav.id} className='cursor-pointer'>
              <NavLink
                id={nav.id}
                to={nav.to}
                className='tabs group flex items-center overflow-hidden rounded-t-lg  hover:bg-slate-400'
                end
              >
                <div className='relative flex w-fit items-center space-x-2 p-1.5 text-xs text-gray-500 transition-all duration-75 group-hover:text-gray-900'>
                  <Icon icon={nav.icon} width='1.5em' />
                  <p>{nav.title}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* == == == Profile Detail == == == */}
        <div className='group relative flex items-center'>
          <div>
            <button
              type='button'
              className='flex rounded-full bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
              aria-expanded='false'
              data-dropdown-toggle='dropdown-user'
            >
              <span className='sr-only'>Open user menu</span>
              <div className='flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white text-slate-500'>
                <Icon icon='mdi:account' width='1.7rem' />
              </div>
              {/* <img
                className='h-8 w-8 rounded-full bg-white'
                src={logoDarsal}
                alt='user photo'
              /> */}
            </button>
          </div>

          <div className='absolute right-2 top-12 hidden aspect-3/4 w-60 max-w-sm flex-col items-center gap-4 rounded-lg border border-gray-400 bg-white py-4 opacity-0  shadow group-focus-within:flex group-focus-within:opacity-100'>
            <div className='aspect-square rounded-full text-slate-500 ring-2 ring-offset-emerald-500 drop-shadow-md'>
              <Icon icon='mdi:account' width='6rem' />
            </div>
            <hr className='w-full border-slate-500' />
            <div className='flex aspect-4/3 w-full flex-col items-center justify-evenly text-xs'>
              {/* <img
                className='h-24 w-24 rounded-full shadow-lg drop-shadow-lg'
                src={logoDarsal}
                alt='Bonnie image'
              /> */}
              <h4 className='font-medium'>Bonnie Green</h4>
              <p>Visual Designer</p>
              <a href='#' className='button flex items-center gap-2'>
                Logout <Icon icon='mdi:account-edit' width='1.5em' />
              </a>
              <a href='#' className='button flex items-center gap-2'>
                Logout <Icon icon='mdi:logout-variant' width='1.5em' />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <hr className='w-full rounded-full border-2 border-slate-400' />
    </header>
  )
}

export default AdminNav
