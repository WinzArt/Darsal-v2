import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'

import { headerNav } from '../../utils'
import { styles } from '../../styles'
import { logoDarsal } from '../../assets'

const Navbar = ({ isBlog }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonKey, setButtonKey] = useState(0)
  const [color, setColor] = useState(false)
  const [visible, setVisible] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    setVisible(prevScrollPos <= window.scrollY && window.scrollY >= 80)
    setPrevScrollPos(currentScrollPos)
    changeColor()
  }

  const changeColor = () => {
    setColor(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, visible])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setButtonKey((prevKey) => prevKey + 1)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setButtonKey((prevKey) => prevKey + 1)
  }

  useEffect(() => {
    const mainAppElement = document.getElementById('mainApp')
    if (mainAppElement) {
      mainAppElement.classList.toggle('fixed', isOpen)
      return () => {
        mainAppElement.classList.remove('fixed')
      }
    }
  }, [isOpen, buttonKey])

  return (
    <header
      className={`${
        styles.padding
      } fixed z-20 flex h-20 w-screen items-center justify-center text-white shadow-sm backdrop-blur-sm transition-all duration-500 ease-in-out md:h-36 ${
        color || isBlog ? 'bg-emerald-700' : ''
      } ${visible && '-translate-y-full'}`}
    >
      <nav className='flex w-full items-center justify-between'>
        <div className='z-10'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setIsOpen(false)
              window.scrollTo(0, 0)
            }}
          >
            <img
              src={logoDarsal}
              alt='Logo'
              className='w-10 rounded-full bg-white ring-4 ring-white md:w-16'
            />
            <h5 className='font-bold leading-tight md:text-2xl'>
              SMK <br /> DARUSSALAM
            </h5>
          </Link>
        </div>
        <div
          className={`absolute left-0 top-0 flex w-full ${
            isOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-full opacity-0'
          } h-screen flex-col gap-8 bg-slate-500 p-8 pt-24 transition-all duration-500 ease-in-out md:static md:h-auto md:-translate-x-0 md:translate-y-0 md:items-end md:gap-2 md:bg-inherit md:p-0 md:opacity-100`}
        >
          <ul className='flex items-center justify-center gap-5 md:justify-end'>
            {headerNav.slice(0, 3).map((nav) => (
              <li key={nav.id} className='cursor-pointer leading-6'>
                <NavLink
                  to={nav.to}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='navlink group'
                >
                  <div className='flex w-fit items-center group-hover:after:w-full'>
                    <Icon icon={nav.icon} />
                    {nav.title}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <hr className='block w-full border-white md:hidden' />
          <ul className='flex flex-col flex-wrap justify-end gap-x-4 gap-y-8 md:flex-row md:items-center'>
            {headerNav.slice(3).map((nav) => (
              <li key={nav.id} className='cursor-pointer'>
                <NavLink
                  to={nav.to}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='navlink group'
                >
                  <div className='w-fit whitespace-nowrap group-hover:after:w-full'>
                    {nav.title}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <hr className='block w-full border-white md:hidden' />
        </div>
        <button
          key={buttonKey}
          className='z-10 self-center md:hidden'
          onClick={toggleMenu}
        >
          <span className='sr-only'>Open main menu</span>
          {isOpen ? (
            <Icon icon='line-md:menu-to-close-alt-transition' width='36' />
          ) : (
            <Icon icon='line-md:close-to-menu-alt-transition' width='36' />
          )}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
