import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'

const BreadCrumbs = () => {
  const location = useLocation()

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, crumbsArray) => (
      <div
        key={crumb}
        className={`flex items-center ${
          index === crumbsArray.length - 1 ? 'text-emerald-700' : ''
        }`}
      >
        <Icon icon='mdi:chevron-right' width='24' className='text-slate-500' />
        <Link
          to={`/${crumbsArray.slice(0, index + 1).join('/')}`}
          className={`capitalize hover:font-medium`}
        >
          {crumb.replace(/[-0-9]/g, ' ')}
        </Link>
      </div>
    ))

  return (
    <div className='flex w-full items-center justify-start py-12'>
      <Link to='/' className='hover:font-medium'>
        Home
      </Link>
      {crumbs}
    </div>
  )
}

export default BreadCrumbs
