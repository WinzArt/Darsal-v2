import React from 'react'
import { Icon } from '@iconify/react'
import { styles } from '../../styles'

const PageBreak = ({ quote, text, className, link, isJumbotron }) => {
  return (
    <div
      className={`${className} ${
        styles.padding
      } flex w-screen justify-center self-center ${
        isJumbotron
          ? 'absolute bottom-0 left-1/2 my-8 w-full -translate-x-1/2 text-white md:justify-start'
          : ''
      }`}
    >
      <div className={`flex w-full flex-col xl:max-w-4xl 2xl:max-w-5xl`}>
        <hr
          className={`mb-8 w-full ${
            isJumbotron ? 'border-white' : 'border-black'
          }`}
        />
        <div className='flex w-full cursor-default flex-col gap-4 md:flex-row 2xl:h-36'>
          <h3
            className='font-bold leading-none md:w-1/3 md:text-4xl'
            // dangerouslySetInnerHTML={{ __html: quote }}
          >
            {quote}
          </h3>
          <p className='leading-relaxed md:w-1/2'>{text}</p>
          {link && (
            <div className='group flex h-fit w-fit items-center hover:font-medium md:justify-end xl:w-1/4'>
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
