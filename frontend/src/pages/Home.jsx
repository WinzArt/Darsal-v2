import React from 'react'
import { batik, logoDarsal } from '../assets'
import { PageBreak, SwiperBig, SwiperSmall } from '../components'
import { aboutSwiper, ekskul, hero, kejuruan } from '../utils'

const Home = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='md:ptt-0 mx-auto flex max-w-lg flex-col items-center justify-center gap-4 pt-12 md:max-w-xl'>
        <img
          src={logoDarsal}
          alt='logo'
          className='w-60 rounded-full p-2 shadow-inner shadow-black/75 ring-black drop-shadow-lg'
        />
        <h4 className='text-center font-serif leading-relaxed md:text-2xl '>
          "Membangun Intelektual Siswa-Siswi Yang Berakhlak, Disiplin, Kreatif,
          dan Bertanggung Jawab Berlandaskan Iman dan Taqwa"
        </h4>
      </div>
      <PageBreak
        quote='Mengenal SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-start'
      />
      <SwiperSmall imageList={hero} next='home-next1' prev='home-prev1' />
      <SwiperBig
        imageList={kejuruan}
        next='home-next2'
        prev='home-prev2'
        isSwiperBig={true}
      />
      <PageBreak
        quote='Mengenal SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-center'
      />
      <div className='relative mb-10 drop-shadow-md sm:mb-0 2xl:self-center'>
        <div
          style={{
            backgroundImage: `url(${batik})`,
          }}
          className='absolute -left-10 -top-14 h-full w-screen rounded-lg bg-emerald-500 bg-[length:15rem] bg-right bg-repeat md:-left-14'
        ></div>
        <SwiperSmall
          imageList={aboutSwiper}
          next='home-next3'
          prev='home-prev3'
        />
      </div>
      <PageBreak
        quote='Mengenal SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-end'
      />
      <div className='relative mb-10 drop-shadow-md sm:mb-0 2xl:self-center'>
        <div
          style={{
            backgroundImage: `url(${batik})`,
          }}
          className='absolute -bottom-14 -right-10 h-1/3 w-screen rounded-lg bg-emerald-500 bg-[length:15rem] bg-right bg-repeat md:-right-14'
        ></div>
        <SwiperSmall imageList={ekskul} next='home-next4' prev='home-prev4' />
      </div>
    </div>
  )
}

export default Home
