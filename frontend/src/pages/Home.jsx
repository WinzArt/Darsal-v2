import React from 'react'
import { styles } from '../styles'
import { logoDarsal } from '../assets'
import { PageBreak, SwiperSmall } from '../components'

const Home = () => {
  return (
    <div className='mx-auto flex flex-col gap-20 container'>
      <div className='mx-auto flex max-w-md flex-col items-center gap-4 md:max-w-lg'>
        <img
          src={logoDarsal}
          alt='logo'
          className='w-40 rounded-full p-2 shadow-inner shadow-black/75 ring-black drop-shadow-lg md:w-60'
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
        border='border-black'
      />
      <SwiperSmall next='home-next1' prev='home-prev1' />
    </div>
  )
}

export default Home
