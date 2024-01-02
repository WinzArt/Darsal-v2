import React from 'react'
import {
  Button,
  Divider,
  ImgFrame,
  PageBreak,
  SwiperSmall,
} from '../components'
import { aboutSwiper, ekskul } from '../utils'
import { batik, images, logo } from '../assets'

const Academic = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-4  md:block'>
        <h1 className='my-8 font-extrabold text-emerald-700'>Akademik</h1>
        <ImgFrame
          image={logo.logoDarsal}
          caption='Image Caption'
          className='order-last float-right md:order-none md:ml-8 md:max-w-xl'
          imgClass='bg-slate-400'
          isPNG={true}
        />
        <h2 className='clear-left font-medium leading-normal tracking-tight text-emerald-700 md:mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti
          repellendus, esse commodi ut optio.
        </h2>
        <p className='order-last clear-left font-medium leading-relaxed tracking-tight text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
          expedita optio ratione commodi voluptatum corrupti provident voluptate
          dolorum error natus rerum vel impedit sit vitae blanditiis possimus
          delectus consequuntur soluta, culpa molestiae repellendus. Omnis
          dolorum laudantium, dicta aspernatur blanditiis cumque et debitis quia
          expedita nulla recusandae sit necessitatibus quisquam!
        </p>
      </div>
      <Divider />
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
              Program :
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
      <div className='relative mb-20 drop-shadow-md 2xl:self-center'>
        <div
          style={{
            backgroundImage: `url(${batik})`,
          }}
          className='absolute -bottom-14 -right-10 h-1/3 w-screen rounded-lg bg-emerald-500 bg-[length:15rem] bg-right bg-repeat md:-right-14'
        ></div>
        <SwiperSmall
          imageList={ekskul}
          next='academic-next1'
          prev='academic-prev1'
        />
      </div>
      <PageBreak
        quote='-----? SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-start'
      />
      <SwiperSmall
        next='academic-next2'
        prev='academic-prev2'
        imageList={aboutSwiper}
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quasi
        minima, adipisci ab dolorem sit quae itaque nulla repudiandae
        reprehenderit quidem! Nostrum esse necessitatibus quod suscipit, dicta
        incidunt omnis dolores!
      </p>
      <div className='flex flex-col gap-8 py-4'>
        <h2 className='font-bold leading-none text-emerald-700'>
          Proses Belajar Mengajar
        </h2>
        <div className='flex flex-col gap-4 md:block'>
          <ImgFrame
            image={images.ruangKelas}
            caption='Ruang Kelas SMK Darussalam'
            className='float-left md:mr-4 md:max-w-xl md:pr-4 2xl:max-w-2xl'
            imgClass='object-bottom'
          />
          <p className='clear-right'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            inventore atque amet maiores temporibus labore cum porro, libero, ab
            commodi facilis consequatur vero, dicta dolorem consequuntur quas
            voluptatem necessitatibus saepe neque quod alias maxime! Dicta
            aspernatur ducimus deleniti praesentium cupiditate. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Impedit inventore
            atque amet maiores temporibus labore cum porro, libero, ab commodi
            facilis consequatur vero, dicta dolorem consequuntur quas voluptatem
            necessitatibus saepe neque quod alias maxime! Dicta aspernatur
            ducimus deleniti praesentium cupiditate. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.
          </p>
        </div>
        <div className='flex flex-col gap-4 md:block'>
          <ImgFrame
            image={images.labKomp}
            caption='Lab. Komputer SMK Darussalam'
            className='order-last float-right md:ml-4 md:max-w-xl md:pl-4 2xl:max-w-2xl'
            imgClass='object-center'
          />
          <p className='clear-left'>
            2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            inventore atque amet maiores temporibus labore cum porro, libero, ab
            commodi facilis consequatur vero, dicta dolorem consequuntur quas
            voluptatem necessitatibus saepe neque quod alias maxime! Dicta
            aspernatur ducimus deleniti praesentium cupiditate.
          </p>
        </div>
      </div>
      <div className='order-last clear-both flex flex-col gap-4'>
        <figure className='mx-auto text-center'>
          <img
            src={logo.logoDarsal}
            alt=''
            className='mx-auto my-4 aspect-square h-10 md:h-14'
          />
          <blockquote>
            <p className='text-2xl font-medium italic text-gray-900 dark:text-white'>
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </blockquote>
          <figcaption className='mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse'>
            <img
              className='h-6 w-6 rounded-full'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
              alt='profile picture'
            />
            <div className='flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700'>
              <cite className='pe-3 font-medium text-gray-900 dark:text-white'>
                Michael Gough
              </cite>
              <cite className='ps-3 text-sm text-gray-500 dark:text-gray-400'>
                CEO at Google
              </cite>
            </div>
          </figcaption>
        </figure>
        <p className=''>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          inventore atque amet maiores temporibus labore cum porro, libero, ab
          commodi facilis consequatur vero, dicta dolorem consequuntur quas
          voluptatem necessitatibus saepe neque quod alias maxime! Dicta
          aspernatur ducimus deleniti praesentium cupiditate.
        </p>
      </div>
    </div>
  )
}

export default Academic
