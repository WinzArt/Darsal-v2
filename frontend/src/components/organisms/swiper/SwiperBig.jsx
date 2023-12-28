import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { hero } from '../../../utils'
import { SliderController } from '../../molecules'

const SwiperBig = ({ next, prev, imageList, isSwiperBig }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='relative w-screen self-center bg-gradient-to-t from-emerald-500 py-8 drop-shadow-xl'>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        spaceBetween={'-100'}
        slidesPerView={'1.1'}
        speed={700}
        coverflowEffect={{
          rotate: 30,
          stretch: -15,
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
        className='swiper_container overflow-visible'
      >
        {(imageList ?? hero).map((swiper, i) => (
          <SwiperSlide key={i} className=''>
            <div
              style={{
                backgroundImage: `url(${swiper.image})`,
              }}
              className={`mb-16 flex aspect-square rounded-xl bg-cover bg-center shadow-xl shadow-black/50 brightness-75 sm:aspect-video ${
                i === activeIndex ? '' : 'blur-sm'
              }`}
            ></div>
            <div
              className={`${
                i === activeIndex
                  ? 'bottom-4 opacity-100'
                  : '-bottom-full opacity-0'
              } absolute w-full flex-col items-center justify-center rounded-xl p-2 text-white transition-all delay-150 duration-500 ease-in`}
            >
              <h4 className='md:text-2xl'>{swiper.title}</h4>
              <p className='text-xs md:text-base'>{swiper.text}</p>
            </div>
          </SwiperSlide>
        ))}
        <SliderController next={next} prev={prev} isSwiperBig={isSwiperBig} />
      </Swiper>
    </div>
  )
}

export default SwiperBig
