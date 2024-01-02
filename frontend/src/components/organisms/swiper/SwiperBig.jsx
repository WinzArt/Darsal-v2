import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { SliderController } from '../../molecules'

const SwiperBig = ({ next, prev, imageList, isSwiperBig }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='relative w-screen self-center bg-gradient-to-t from-emerald-500 py-4 drop-shadow-lg'>
      {/* <div
        style={{
          backgroundImage: `url(${batik})`,
        }}
        className='absolute inset-0 h-full w-screen bg-[length:15rem] bg-right bg-repeat'
      ></div> */}
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        spaceBetween={'-50'}
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
            slidesPerView: 1.3,
            spaceBetween: -30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: -30,
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
        className='swiper_container py-10'
      >
        {imageList.map((swiper, i) => (
          <SwiperSlide
            key={i}
            className={`relative aspect-square  overflow-hidden rounded-lg bg-slate-500 shadow-md shadow-black/50 transition-all duration-1000 sm:aspect-video ${
              i === activeIndex ? '' : 'blur-sm'
            }`}
          >
            <div
              style={{
                backgroundImage: `url(${swiper.image})`,
              }}
              className={`h-full w-full bg-cover bg-center brightness-75 `}
            ></div>
            <div
              className={`${
                i === activeIndex
                  ? '-bottom-[75%] opacity-100 sm:-bottom-[70%]'
                  : '-bottom-full opacity-0'
              } absolute h-full w-full flex-col items-center justify-center bg-emerald-700/30 px-4 text-white transition-all delay-150 duration-500 ease-in md:px-12`}
            >
              <h4 className='py-2 md:text-2xl'>{swiper.title}</h4>
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
