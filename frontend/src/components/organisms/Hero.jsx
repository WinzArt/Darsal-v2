import React from 'react'
import { useLocation } from 'react-router-dom'
import { styles } from '../../styles'

const Hero = ({ title, image, text }) => {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <div className='relative'>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`relative aspect-square w-full bg-no-repeat sm:h-[32rem] ${
          isAdmin
            ? 'bg-transparent bg-[length:20rem] bg-[center_bottom_25%] backdrop-brightness-75'
            : 'bg-cover bg-center bg-no-repeat brightness-50'
        }`}
      ></div>
      <div
        className={`${styles.padding} absolute bottom-0 flex w-full justify-center md:justify-start`}
      >
        <div className='flex w-full flex-col md:w-1/2'>
          <hr className='mb-8 w-full border-white' />
          <div className='flex h-full w-full cursor-default flex-col gap-4 text-white md:flex-row'>
            <h1
              className='text-xl font-bold leading-none md:w-1/2 md:text-3xl'
              // dangerouslySetInnerHTML={{ __html: title }}
            >
              {title}
              <br />
              SMK Darussalam
            </h1>
            <p className='text-sm md:w-1/2'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
