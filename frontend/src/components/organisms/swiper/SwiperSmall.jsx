import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { hero } from '../../../utils'
import { SliderController } from '../../molecules'

const SwiperSmall = ({ next, prev, imageList }) => {
  const breakPoints = {
    320: {
      slidesPerView: 2.1,
    },
    640: {
      slidesPerView: 3.3,
    },
    1280: {
      slidesPerView: 4,
    },
    1536: {
      slidesPerView: 5,
    },
  }

  return (
    <div className='relative drop-shadow-lg 2xl:w-[75vw] 2xl:self-center'>
      <Swiper
        modules={[Navigation, Pagination]}
        speed={200}
        breakpoints={breakPoints}
        navigation={{
          nextEl: `.${next}`,
          prevEl: `.${prev}`,
          clickable: true,
        }}
        className='swiper_container rounded-lg shadow-lg shadow-black/50'
      >
        {imageList.map((swiper, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${swiper.image})`,
              }}
              className='relative aspect-2/3 w-full bg-cover bg-center brightness-75'
            ></div>
            <div className='group absolute inset-0 flex aspect-2/3 w-full cursor-default items-center px-4 text-white duration-1000 hover:backdrop-blur-sm'>
              <div className='relative inset-y-1/2 h-1/2 transition-all duration-300 ease-in-out group-hover:inset-y-0'>
                <h4 className='font-semibold'>{swiper.title}</h4>
                <div className='opacity-0 duration-500 group-hover:opacity-100'>
                  <hr className='my-4' />
                  <p className='tracking-tighter'>{swiper.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderController
        next={next}
        prev={prev}
        className='bottom-6 right-0 md:-right-20 md:bottom-full md:top-8 2xl:-right-32 2xl:w-28'
      />
    </div>
  )
}

export default SwiperSmall
