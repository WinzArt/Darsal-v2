import { Icon } from '@iconify/react'
import React from 'react'

const SliderController = ({
  next,
  prev,
  className,
  isJumbotron,
  isSwiperBig,
}) => {
  return (
    <div
      className={`${className} slider-controler ${isSwiperBig ?? 'absolute'} `}
    >
      <div
        className={`${next} swiper-button-next ${
          isSwiperBig
            ? 'mr-2 border-2 border-cyan-500 text-cyan-500 sm:mr-6'
            : 'border-t-2'
        } ${
          isJumbotron
            ? 'text-white md:text-white'
            : 'border-cyan-500 text-cyan-500'
        }`}
      >
        <Icon
          icon='solar:double-alt-arrow-right-broken'
          vFlip={true}
          className='icon-next'
        />
      </div>
      <div
        className={`${prev} swiper-button-prev ${
          isSwiperBig
            ? 'ml-2 border-2 border-cyan-500 text-cyan-500 sm:ml-6'
            : 'mt-8 border-b-2'
        } ${
          isJumbotron ? 'text-white md:text-white' : 'border-black text-black'
        }`}
      >
        <Icon icon='solar:double-alt-arrow-left-broken' className='icon-prev' />
      </div>
    </div>
  )
}

export default SliderController
