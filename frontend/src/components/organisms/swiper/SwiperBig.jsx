import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { hero } from '../../../utils'
import { SliderController } from '../../molecules'

const SwiperBig = ({ next, prev, isSwiperBig }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='relative mb-8'>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        spaceBetween={'0'}
        slidesPerView={'1.1'}
        speed={700}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 2,
          scale: 0.75,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          nextEl: `.${next}`,
          prevEl: `.${prev}`,
          clickable: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore
          setActiveIndex(realIndex)
        }}
        className='swiper_container bg-gradient-to-t from-teal-200 to-transparent'
      >
        {hero.map((swiper, i) => (
          <SwiperSlide key={i} className=''>
            <div
              style={{
                backgroundImage: `url(${swiper.image})`,
              }}
              className={`my-10 flex aspect-square rounded-xl bg-cover bg-center shadow-xl shadow-black/50 brightness-75 sm:aspect-video ${
                i === activeIndex ? '' : 'blur-sm'
              }`}
            ></div>
            <div className='absolute inset-0 flex w-full cursor-default items-center text-center text-white duration-1000'>
              <div className='absolute bottom-12 right-2 flex max-w-sm flex-col rounded-xl bg-teal-500/50 p-2 backdrop-blur-sm sm:max-w-xs'>
                <h1 className='text-xl md:text-2xl'>{swiper.title}</h1>
                <p className='text-xs md:text-base'>{swiper.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SliderController next={next} prev={prev} isSwiperBig={isSwiperBig} />
      </Swiper>
    </div>
  )
}

export default SwiperBig
