import React from 'react'
import { Divider, Gallery, ImgFrame, PageBreak, SwiperBig } from '../components'
import { logoDarsal } from '../assets'
import { ekskul, kejuruan } from '../utils'

const Achievment = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-4 md:block'>
        <h1 className='my-8 font-extrabold text-emerald-700'>Prestasi</h1>
        <h2 className='max-w-4xl font-medium leading-normal text-emerald-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          nemo assumenda mollitia placeat nihil amet molestiae aut quo nostrum,
          delectus repellat. Lorem ipsum dolor sit amet.
        </h2>
        <p className='text-lg font-medium leading-relaxed tracking-tight'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem aliquam sit saepe sunt ut eum consequatur, ea
          voluptatum accusamus expedita.
        </p>
      </div>
      <PageBreak
        quote='Pencapaian SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-end'
      />
      <SwiperBig
        imageList={ekskul}
        next='achievment-next1'
        prev='achievment-prev1'
        isSwiperBig={true}
      />
      <Gallery imageList={kejuruan} />
      <Divider />
    </div>
  )
}

export default Achievment
