import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'

import {
  atk,
  logoBeginners,
  logoDarsal,
  logoUnpam,
  SMKBisa3,
} from '../../assets'
import { footerNav } from '../../utils'
import { styles } from '../../styles'

const Footer = () => {
  return (
    <>
      <div
        className={`${styles.padding} relative flex flex-col justify-between overflow-hidden bg-slate-400 !pb-4`}
      >
        <div className='z-10'>
          <div className='mb-6 flex h-16 w-full items-center justify-between'>
            <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive('')
                window.scrollTo(0, 0)
              }}
            >
              <img src={logoDarsal} alt='Logo' className='w-10 sm:w-16' />
              <h1 className='font-bold leading-tight sm:text-2xl'>
                SMK <br /> DARUSSALAM
              </h1>
            </Link>
            <img src={SMKBisa3} alt='' className='h-full' />
          </div>
          <div className='flex flex-col gap-2 p-6 text-xl font-medium leading-relaxed tracking-wider'>
            <div className='flex items-center gap-2'>
              <Icon icon='mdi:phone-classic' width='24' />
              <p>021-9876543</p>
            </div>
            <div className='flex items-center gap-2'>
              <Icon icon='mdi:whatsapp' width='24' />
              <p>082064191817</p>
            </div>
            <div className='flex items-center gap-2'>
              <Icon icon='mdi:at' width='24' />
              <p>admin@darsal.co.id</p>
            </div>
            <div className='flex flex-nowrap items-center gap-2'>
              <Icon icon='mdi:map-marker' width='24' />
              <p>
                Jl. Otista No. 36 Cimanggis Ciputat
                <br />
                Kota Tangerang Selatan
              </p>
            </div>
          </div>
        </div>
        <div className='z-10'>
          <div className='flex items-baseline justify-between px-6 pb-6'>
            <Link to='/' className='navlink group font-semibold'>
              <div className='group-hover:after:w-full'>Hubungi kami</div>
            </Link>
            <ul className='flex gap-6 '>
              {footerNav.map((nav) => (
                <li
                  key={nav.id}
                  className={`${nav.class} duration-200 hover:scale-125`}
                >
                  <NavLink to={nav.to} target='_blank' className='text-3xl'>
                    <Icon icon={nav.icon} />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <hr className='border-black pb-4' />
          <div className='flex items-center justify-around px-6'>
            <Link
              to='/'
              className='winzart bg-slate-200 p-1 text-xs drop-shadow-sm'
            >
              Powered by <span className='font-semibold'>winzArt</span>
            </Link>
            <div className='flex h-10 gap-4'>
              <img src={logoDarsal} alt='logoDarsal' />
              <img src={logoUnpam} alt='logoUnpam' />
              <img src={logoBeginners} alt='logoBeginners' />
            </div>
          </div>
        </div>
        <div
          className='absolute bottom-0 h-[25rem] w-[200%] -rotate-45 bg-slate-500/30 shadow-inner shadow-black/80 sm:-left-28 sm:h-[35rem]'
          style={{
            backgroundImage: `url(${atk})`,
            backgroundSize: '105rem',
            backgroundPosition: 'center',
            // transform: 'scaleX(0)',
          }}
        ></div>
      </div>
    </>
  )
}

export default Footer
