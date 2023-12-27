import React from 'react'
import { Gallery, PageBreak, SwiperSmall } from '../components'
import { aboutSwiper, kejuruan } from '../utils'

const Academic = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col text-emerald-700'>
        <h1 className='my-8 text-6xl font-bold leading-tight '>Akademik</h1>
        <p className='max-w-4xl text-3xl font-medium leading-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          nemo assumenda mollitia placeat nihil amet molestiae aut quo nostrum,
          delectus repellat. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <Gallery imageList={kejuruan} />
      <PageBreak
        quote='Kejuruan SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-start'
      />
      <SwiperSmall
        next='about-next1'
        prev='about-prev1'
        imageList={aboutSwiper}
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quasi
        minima, adipisci ab dolorem sit quae itaque nulla repudiandae
        reprehenderit quidem! Nostrum esse necessitatibus quod suscipit, dicta
        incidunt omnis dolores!
      </p>
    </div>
  )
}

export default Academic
