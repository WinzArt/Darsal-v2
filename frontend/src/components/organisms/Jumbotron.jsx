import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import { Icon } from '@iconify/react'

import { jumbotron } from '../../utils'
import { styles } from '../../styles'
import { PageBreak, SliderController } from '../molecules'

const Jumbotron = ({ next, prev, isJumbotron }) => {
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
          nextEl: `.${next}`,
          prevEl: `.${prev}`,
          clickable: true,
        }}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore
          setActiveIndex(realIndex)
        }}
        className='swiper_container relative'
      >
        {jumbotron.map((swiper, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${swiper.image})`,
              }}
              className='h-screen w-full bg-cover bg-center brightness-50'
            ></div>
            <PageBreak
              quote={swiper.qoute}
              text={swiper.text}
              className={`${
                styles.padding
              } absolute bottom-0 w-full text-white transition-all delay-700 duration-700 ease-in xl:container md:justify-start ${
                i === activeIndex
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
              }`}
              link={true}
              isJumbotron={isJumbotron}
            />
          </SwiperSlide>
        ))}
        <SliderController
          isJumbotron={isJumbotron}
          next={next}
          prev={prev}
          className='bottom-64 right-4 w-20 sm:bottom-80 sm:right-8 md:bottom-80'
        />
      </Swiper>
    </div>
  )
}

export default Jumbotron
