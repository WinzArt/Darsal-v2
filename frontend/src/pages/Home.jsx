import React from 'react'
import { styles } from '../styles'
import { batik, logoDarsal } from '../assets'
import { PageBreak, SwiperBig, SwiperSmall } from '../components'

const Home = () => {
  return (
    <div className='container mx-auto flex flex-col gap-20'>
      <div className='mx-auto flex max-w-md flex-col items-center gap-4 md:max-w-lg'>
        <img
          src={logoDarsal}
          alt='logo'
          className='w-60 rounded-full p-2 shadow-inner shadow-black/75 ring-black drop-shadow-lg'
        />
        <p className='text-center font-serif text-xl leading-relaxed md:text-2xl '>
          "Membangun Intelektual Siswa-Siswi Yang Berakhlak, Disiplin, Kreatif,
          dan Bertanggung Jawab Berlandaskan Iman dan Taqwa"
        </p>
      </div>
      <PageBreak
        quote='Mengenal SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-start'
      />
      <SwiperSmall next='home-next1' prev='home-prev1' />
      <div className='w-screen self-center'>
        <SwiperBig next='home-next2' prev='home-prev2' isSwiperBig={true} />
      </div>
      <PageBreak
        quote='Mengenal SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-end'
      />
      <div className='relative mb-10 sm:mb-0'>
        <div
          style={{
            backgroundImage: `url(${batik})`,
          }}
          className='absolute -left-10 -top-14 h-full w-screen rounded-tl-lg bg-emerald-500 bg-[length:15rem] bg-right bg-repeat md:left-5'
        ></div>
        <SwiperSmall next='home-next3' prev='home-prev3' />
      </div>
    </div>
  )
}

export default Home
