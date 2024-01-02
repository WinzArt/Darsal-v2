import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'

import {
  atk,
  batik,
  logoBeginners,
  logoDarsal,
  logoUnpam,
  SMKBisa3,
} from '../../assets'
import { footerNav } from '../../utils'
import { styles } from '../../styles'

const Footer = () => {
  return (
    <div
      className={`${styles.padding} relative flex flex-col justify-between overflow-hidden bg-slate-400 !pb-4`}
    >
      <hr className='absolute inset-0 z-10 h-1.5 bg-gradient-to-b from-black/50' />
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
            <img src={logoDarsal} alt='Logo' className='w-12 md:w-16' />
            <h1 className='text-xl font-bold leading-tight md:text-2xl'>
              SMK <br /> DARUSSALAM
            </h1>
          </Link>
          <img src={SMKBisa3} alt='' className='h-3/4 md:h-full' />
        </div>
        <div className='flex flex-col gap-2 p-6 text-sm font-medium leading-relaxed tracking-wider md:text-xl'>
          <div className='flex items-center gap-2'>
            <Icon icon='mdi:phone-classic' className='text-xl md:text-2xl' />
            <p>021-9876543</p>
          </div>
          <div className='flex items-center gap-2'>
            <Icon icon='mdi:whatsapp' className='text-xl md:text-2xl' />
            <p>081511719800</p>
          </div>
          <div className='flex items-center gap-2'>
            <Icon icon='mdi:at' className='text-xl md:text-2xl' />
            <p>admin@darsal.co.id</p>
          </div>
          <div className='flex flex-nowrap items-center gap-2'>
            <Icon icon='mdi:map-marker' className='text-xl md:text-2xl' />
            <p>
              Jl. Puri Pamulang Kec. Pamulang
              <br />
              Kota Tangerang Selatan
            </p>
          </div>
        </div>
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
                <NavLink
                  to={nav.to}
                  target='_blank'
                  className='text-xl md:text-2xl'
                >
                  <Icon icon={nav.icon} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className='border-black pb-4' />
        <div className='mx-auto flex max-w-sm items-center justify-between md:max-w-2xl'>
          <Link to='/' className='bg-slate-200 p-1 text-xxs drop-shadow-sm'>
            Powered by <span className='font-semibold'>winzArt</span>
          </Link>
          <div className='flex h-6 gap-4'>
            <img src={logoDarsal} alt='logoDarsal' />
            <img src={logoUnpam} alt='logoUnpam' />
            <img src={logoBeginners} alt='logoBeginners' />
          </div>
        </div>
      </div>
      <div
        className='absolute inset-0 -left-12 -top-12 origin-top-right -rotate-45 bg-inherit bg-[length:30rem] bg-[center_top_0] shadow-inner shadow-black/80 brightness-95'
        style={{
          backgroundImage: `url(${atk})`,
        }}
      ></div>
    </div>
  )
}

export default Footer
