import React from 'react'
import { Icon } from '@iconify/react'

const PageBreak = ({ quote, text, className, border, link }) => {
  return (
    <div className={`${className} flex justify-center`}>
      <div className='flex w-full flex-col md:w-1/2'>
        <hr className={`mb-8 w-full ${border}`} />
        <div className='flex h-full w-full cursor-default flex-col gap-4 md:flex-row'>
          <h1 className='text-2xl font-bold leading-none md:w-1/2 md:text-3xl'>
            {quote}
          </h1>
          <p className='text-sm md:w-1/2'>{text}</p>
          {link && (
            <div className='group flex h-fit w-fit items-center hover:font-medium md:w-1/4 md:justify-end'>
              <p className='cursor-pointer'>Selengkapnya</p>
              <Icon
                icon='pajamas:arrow-right'
                width='24'
                className='duration-500 group-hover:translate-x-3 group-hover:scale-150'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageBreak
