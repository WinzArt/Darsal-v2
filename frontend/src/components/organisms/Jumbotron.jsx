import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import { Icon } from '@iconify/react'

import { jumbotron } from '../../utils'
import { styles } from '../../styles'

const Jumbotron = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect={'fade'}
        grabCursor={false}
        // centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        allowTouchMove={true}
        speed={2000}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
          clickable: true,
        }}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore
          setActiveIndex(realIndex)
        }}
        className='swiper_container'
      >
        {jumbotron.map((swiper, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${swiper.image})`,
              }}
              className='relative h-screen w-full bg-cover bg-center brightness-50'
            ></div>
            <div
              className={`${
                styles.padding
              } absolute bottom-0 flex w-full  justify-center transition-all delay-700 duration-700 ease-in md:justify-start ${
                i === activeIndex
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
              }`}
            >
              <div className='flex w-full flex-col md:w-1/2'>
                <hr className='mb-8 w-full border-white' />
                <div className='flex h-full w-full cursor-default flex-col gap-4 text-white md:flex-row'>
                  <h1 className='text-2xl font-bold leading-none md:w-1/2 md:text-3xl'>
                    {swiper.qoute}
                  </h1>
                  <p className='text-sm md:w-1/2'>{swiper.text}</p>
                  <div className='group flex h-fit items-center hover:font-medium sm:w-1/4 sm:justify-end'>
                    <p className='cursor-pointer'>Selengkapnya</p>
                    <Icon
                      icon='pajamas:arrow-right'
                      width='24'
                      className='duration-500 group-hover:translate-x-3 group-hover:scale-150'
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='slider-controler absolute bottom-64 right-4 w-20 sm:bottom-72 sm:right-8 md:bottom-80'>
          <div className='swiper-button-prev hero-prev slider-arrow mt-4 h-10 w-10 rounded-md border-b-4 text-white after:hidden md:mt-8 '>
            <Icon
              icon='solar:double-alt-arrow-left-broken'
              className='icon-prev'
            />
          </div>
          {/* <div className='swiper-pagination'></div> */}
          <div className='swiper-button-next hero-next slider-arrow h-10 w-10 rounded-md border-t-4 text-white after:hidden'>
            <Icon
              icon='solar:double-alt-arrow-right-broken'
              vFlip={true}
              className='icon-next'
            />
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default Jumbotron
