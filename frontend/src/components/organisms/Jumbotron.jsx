import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import { Icon } from '@iconify/react'

import { jumbotron } from '../../utils'
import { styles } from '../../styles'
import { PageBreak } from '../molecules'

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
            <PageBreak
              quote={swiper.qoute}
              text={swiper.text}
              className={`${
                styles.padding
              } absolute bottom-0 text-white transition-all delay-700 duration-700 ease-in md:justify-start ${
                i === activeIndex
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
              }`}
              link={true}
            />
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
