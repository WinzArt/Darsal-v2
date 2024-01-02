import React from 'react'
import { Divider, Gallery, ImgFrame, PageBreak, SwiperBig } from '../components'
import { logoDarsal } from '../assets'
import { ekskul, kejuruan } from '../utils'

const Achievment = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-4 md:block'>
        <h1 className='my-8 font-extrabold text-emerald-700'>Prestasi</h1>
        <ImgFrame
          image={logoDarsal}
          caption='Image Caption'
          className='float-left md:order-none md:mr-8 md:max-w-xl'
          imgClass='bg-slate-400'
          isPNG={true}
        />
        <h2 className='clear-right font-medium leading-normal text-emerald-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing doloremque nemo
          assumenda ?
        </h2>
        <p className='clear-right text-justify text-lg font-medium leading-relaxed tracking-tight'>
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
      <div className='space-y-4'>
        <h2 className='font-bold leading-none text-emerald-700'>Prestasi</h2>
        <p>
          3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          inventore atque amet maiores temporibus labore cum porro, libero, ab
          commodi facilis consequatur vero, dicta dolorem consequuntur quas
          voluptatem necessitatibus saepe neque quod alias maxime! Dicta
          aspernatur ducimus deleniti praesentium cupiditate.
        </p>
        <Gallery imageList={kejuruan} grid={true} />
      </div>
      <Divider />
    </div>
  )
}

export default Achievment
