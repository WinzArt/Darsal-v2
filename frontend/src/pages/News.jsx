import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { Button, ImgFrame, Label, PostCard, Search } from '../components'
import { images } from '../assets'

const News = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='space-y-8'>
        <div className='space-y-8'>
          <h1 className='font-extrabold text-emerald-700'>Darsal Blog</h1>
          <h4 className='max-w-4xl leading-normal'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Porro dolores,
            quasi cum saepe nihil alias tempora dolorem eaque adipisci quo
            cumque.
          </h4>
        </div>
        <div className='space-y-4'>
          <h3 className='font-bold'>Category</h3>
          <div className='flex items-center justify-between'>
            <ul className='flex items-center gap-2'>
              <li>
                <Button title='All' />
              </li>
              <li>
                <Button title='Prestasi' />
              </li>
              <li>
                <Button title='Organisasi' />
              </li>
              <li>
                <Button title='Akademik' />
              </li>
              <li>
                <Button title='Umum' />
              </li>
            </ul>
            <Search placeholder='Search...' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-1 font-semibold'>
          <Icon
            icon='mdi:alert-decagram'
            width='24'
            className='text-blue-500'
          />
          <h4>Berita Terbaru</h4>
        </div>
        <h2 className='font-extrabold text-emerald-700'>
          Judul Berita Terbaru
        </h2>
        <div className='flex items-center gap-1 text-sm'>
          <Icon icon='mdi:clock-time-eight' />
          <p>21 December 2023, 10:33 WIB</p>
        </div>
        <ImgFrame image={images.sispala} />
        <h4 className='line-clamp-3'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam error
          aspernatur mollitia beatae praesentium laborum ducimus nesciunt
          officiis, delectus ea eaque optio ex tenetur, ullam molestiae dolor et
          voluptates corrupti, enim illum nostrum ipsa fuga maxime? Beatae
          voluptatum magni architecto. Odit ad aliquam temporibus et expedita
          harum assumenda sequi beatae!
        </h4>
        <Link
          // to={`${data[0].id}${data[0].slug}`}
          to='post'
          className='group flex h-fit w-fit items-center self-end duration-500 hover:font-medium active:scale-95'
        >
          <p className='cursor-pointer'>Selengkapnya</p>
          <Icon
            icon='pajamas:arrow-right'
            width='24'
            className='duration-500 group-hover:translate-x-3 group-hover:scale-150'
          />
        </Link>
      </div>
      <div>
        <hr className='border-slate-500' />
        <div className='flex w-full flex-nowrap items-center justify-between p-4 md:px-20'>
          <p>{'data.length'} Posts</p>
          <div className='flex gap-1'>
            <p>SORT BY</p>
            <p className='inline-flex items-center'>
              Latest <Icon icon='mdi:chevron-down' width='24' />
            </p>
          </div>
        </div>
        <hr className='border-slate-500' />
      </div>
      <div className='grid gap-12 sm:grid-cols-2 sm:gap-8 md:grid-cols-3'>
        <PostCard />
        <div className='group relative rounded-lg border-[1px] border-slate-300 sm:flex sm:flex-col sm:p-0'>
          <div className='absolute -top-7 flex gap-2'>
            <Label
              title='Category'
              className=' h-fit bg-blue-100 text-blue-500 sm:block'
            />
            <Label
              title='Category'
              className=' h-fit bg-blue-100 text-blue-500 sm:block'
            />
          </div>
          <Link to='/'>
            <ImgFrame
              image={images.dayung}
              className='float-left mr-4 max-w-xs sm:max-w-none '
              imgClass='sm:rounded-b-none'
            />
            <div className='clear-right flex flex-col justify-between gap-2 sm:gap-4 sm:p-4'>
              <h4 className='line-clamp-2 font-bold group-hover:text-emerald-700 group-hover:underline'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                vero.
              </h4>
              <div className='flex items-center gap-1 text-xs'>
                <Icon icon='mdi:clock-time-eight' />
                <p>21 December 2023, 10:33 WIB</p>
              </div>
              <p className='line-clamp-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                est labore temporibus dolore nostrum nemo rerum, beatae illo
                recusandae, qui doloribus neque sapiente ipsum officiis.
                Excepturi assumenda odio saepe? Explicabo soluta mollitia cum
                veritatis nulla cumque illo, repellendus, molestiae eos maxime
                deserunt officia recusandae? Nesciunt rerum atque ullam nihil
                laboriosam.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default News
