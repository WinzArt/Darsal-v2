import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Icon } from '@iconify/react'
import { hero } from '../../../utils'

const SwiperSmall = ({ next, prev }) => {
  const breakPoints = {
    320: {
      slidesPerView: 2.1,
    },
    640: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 5,
    },
  }

  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        speed={200}
        breakpoints={breakPoints}
        navigation={{
          nextEl: `.${next}`,
          prevEl: `.${prev}`,
          clickable: true,
        }}
        className='swiper_container max-w-6xl rounded-lg shadow-lg shadow-black/50'
      >
        {hero.map((swiper, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${swiper.image})`,
              }}
              className='aspect-2/3 relative w-full  bg-cover bg-center brightness-75'
            ></div>
            <div className='aspect-2/3 group absolute inset-0 flex w-full cursor-default items-center px-4 text-white duration-1000 hover:backdrop-blur-sm'>
              <div className='relative inset-y-1/2 transition-all duration-300 ease-in-out group-hover:inset-y-0'>
                <h1 className='text-xl font-semibold'>{swiper.title}</h1>
                <div className='opacity-0 duration-500 group-hover:opacity-100'>
                  <hr className='m-4' />
                  <p>{swiper.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='slider-controler absolute bottom-5 right-0 w-20 xl:-right-12 xl:-top-60 2xl:-right-24'>
        <div
          className={`${next} swiper-button-next home-next h-10 w-10 rounded-md border-t-4 border-teal-500 text-teal-500 after:hidden xl:border-black xl:text-black`}
        >
          <Icon
            icon='solar:double-alt-arrow-right-broken'
            vFlip={true}
            className='icon-next'
          />
        </div>
        <div
          className={`${prev} swiper-button-prev home-prev h-10 w-10 translate-y-10 rounded-md border-b-4 border-black text-black after:hidden`}
        >
          <Icon
            icon='solar:double-alt-arrow-left-broken'
            className='icon-prev'
          />
        </div>
      </div>
    </div>
  )
}

export default SwiperSmall
