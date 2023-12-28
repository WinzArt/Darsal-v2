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
      className={`${className} slider-controler ${
        isSwiperBig ?? 'absolute w-20 2xl:w-28'
      } `}
    >
      <div
        className={`${next} swiper-button-next border-t-2 ${
          isSwiperBig
            ? 'mr-2 border-2 border-black text-black sm:mr-6'
            : isJumbotron
              ? 'border-white text-white'
              : 'border-emerald-400 text-emerald-400 md:border-black md:text-black'
        } `}
      >
        <Icon
          icon='solar:double-alt-arrow-right-broken'
          vFlip={true}
          className='icon-next'
        />
      </div>
      <div
        className={`${prev} swiper-button-prev border-b-2  ${
          isSwiperBig
            ? 'ml-2 border-2 border-black text-black sm:ml-6'
            : isJumbotron
              ? 'mt-8 border-white text-white 2xl:mt-12'
              : 'mt-8 2xl:mt-12'
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
