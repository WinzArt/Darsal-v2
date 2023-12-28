import React from 'react'
import {
  Button,
  Divider,
  Gallery,
  ImgFrame,
  PageBreak,
  SwiperSmall,
} from '../components'
import { aboutSwiper, kejuruan } from '../utils'
import { logoDarsal } from '../assets'

const Academic = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-4 text-emerald-700 md:block'>
        <h1 className='my-8 text-6xl font-bold leading-tight '>Akademik</h1>
        <ImgFrame
          image={logoDarsal}
          caption='Image Caption'
          className='order-last float-right md:order-none md:ml-8 md:max-w-xl'
          imgClass='bg-slate-400'
          isPNG={true}
        />
        <h2 className='clear-left font-medium leading-normal tracking-tight md:mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti
          repellendus, esse commodi ut optio.
        </h2>
        <p className='clear-left font-medium leading-relaxed tracking-tight text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
          expedita optio ratione commodi voluptatum corrupti provident voluptate
          dolorum error natus rerum vel impedit sit vitae blanditiis possimus
          delectus consequuntur soluta, culpa molestiae repellendus. Omnis
          dolorum laudantium, dicta aspernatur blanditiis cumque et debitis quia
          expedita nulla recusandae sit necessitatibus quisquam!
        </p>
        <Divider className='order-last' />
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='font-bold text-emerald-700'>Kurikulum SMK Darussalam</h2>
        <p className='font-medium leading-relaxed tracking-tight text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
          expedita optio ratione commodi voluptatum corrupti provident voluptate
          dolorum error natus rerum vel impedit sit vitae blanditiis possimus
          delectus consequuntur soluta, culpa molestiae repellendus. Omnis
          dolorum laudantium, dicta aspernatur blanditiis cumque et debitis quia
          expedita nulla recusandae sit necessitatibus quisquam!
        </p>
        <div className='flex flex-col gap-x-8 gap-y-4 md:flex-row'>
          <div className='flex w-full flex-col items-center justify-center gap-4'>
            <p className='font-medium leading-relaxed tracking-tight text-black'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              dolor expedita optio ratione commodi voluptatum corrupti provident
              voluptate dolorum error natus rerum vel impedit sit vitae
              blanditiis possimus delectus consequuntur soluta.
            </p>
            <div className='flex w-full flex-col items-center gap-4'>
              <h3 className='text-center font-semibold'>
                Panduan Pembelajaran
              </h3>
              <Button
                title='Tata Tertib SMK Darussalam 2023/2024'
                className='flex-row-reverse bg-slate-300'
                icon='mdi:file-download-outline'
                width='24'
              />
            </div>
            <div className='flex w-full flex-col items-center gap-4'>
              <h3 className='text-center font-semibold'>
                Panduan Pembelajaran
              </h3>
              <Button
                title='Tata Tertib SMK Darussalam 2023/2024'
                className='flex-row-reverse bg-slate-300'
                icon='mdi:file-download-outline'
                width='24'
              />
            </div>
            <div className='flex w-full flex-col items-center gap-4'>
              <h3 className='text-center font-semibold'>
                Panduan Pembelajaran
              </h3>
              <Button
                title='Tata Tertib SMK Darussalam 2023/2024'
                className='flex-row-reverse bg-slate-300'
                icon='mdi:file-download-outline'
                width='24'
              />
            </div>
          </div>
          <div className='flex w-full flex-col gap-2'>
            <p className='font-medium leading-relaxed tracking-tight'>
              Program unggulan:
            </p>
            <ul className='mx-auto list-disc space-y-4 px-4 md:max-w-xl'>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, sapiente quae ipsum ad molestiae rerum?
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, sapiente quae ipsum ad molestiae rerum?
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, sapiente quae ipsum ad molestiae rerum?
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, sapiente quae ipsum ad molestiae rerum?
              </li>
            </ul>
          </div>
        </div>
      </div>
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
