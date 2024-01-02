import React from 'react'
import {
  Accordion,
  Button,
  Divider,
  Gallery,
  ImgFrame,
  PageBreak,
} from '../components'
import { logoDarsal } from '../assets'
import { kejuruan } from '../utils'

const Admission = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-4 md:block md:space-y-8'>
        <h1 className='my-8 font-extrabold text-emerald-700'>Pendaftaran</h1>
        <p className='clear-right max-w-4xl font-semibold leading-relaxed'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          dolores, quasi cum saepe nihil alias tempora dolorem eaque adipisci
          quo cumque. Assumenda ab laborum iste sed blanditiis consequatur cum
          dolorum culpa. Eveniet exercitationem provident adipisci.
        </p>
        <ImgFrame
          image={logoDarsal}
          caption='Image Caption'
          className='float-left md:mr-8 md:max-w-xl'
          imgClass='bg-slate-400'
          isPNG={true}
        />
        <p className='clear-right text-justify leading-relaxed tracking-tight'>
          Sekolah Menengah Kejuruan (SMK) Darussalam didirikan pada tahun 2009
          dengan SK Pendirian Nomor 800/1666-Dispen 2009 di Kota Tangerang
          Selatan Provinsi Banten atas Prakarsa Ketua Yayasan Pendidikan Islam
          Modern Darussalam
        </p>
        <div className='flex flex-col items-center justify-center gap-4 md:max-w-xl'>
          <Button
            title='Formulir Pendaftaran'
            className='w-full flex-row-reverse bg-blue-500 text-white'
            icon='mdi:file-download-outline'
            width='24'
          />
          <Button
            title='Tanya Admin ?'
            className='w-full flex-row-reverse bg-green-500 text-white'
            icon='mdi:whatsapp'
            width='24'
          />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='font-bold leading-none text-emerald-700'>
          Panduan Pendaftaran
        </h2>
        <p className='my-2'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          quasi minima, adipisci ab dolorem sit quae quidem!
        </p>
        <div className='px-2'>
          <Accordion
            title='Title 1'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          quasi minima, adipisci ab dolorem sit quae quidem!'
          />
          <Accordion
            title='Title 2'
            content='debitis consectetur! Deserunt eveniet minima amet in, dolor numquam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          quasi minima, adipisci ab dolorem sit quae quidem!'
          />
          <Accordion
            title='Title 3'
            content='quaerat a! Qui voluptatibus quas exercitationem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          quasi minima, adipisci ab dolorem sit quae quidem!'
          />
        </div>
      </div>
      <Divider />
      <div className='flex flex-col gap-4'>
        <h2 className='font-bold leading-none text-emerald-700'>
          Pilihan Kejuruan
        </h2>
        <p className='my-2'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          quasi minima, adipisci ab dolorem sit quae quidem!
        </p>
        <Gallery imageList={kejuruan} />
      </div>
      <PageBreak
        quote='Alumni SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-end'
      />
      <ImgFrame
        image={logoDarsal}
        caption='Image Caption'
        className='self-center'
        imgClass='bg-slate-400'
        isPNG={true}
      />
      <div className='mx-auto flex w-full flex-col items-center justify-center gap-4 md:max-w-xl md:flex-row'>
        <Button
          title='Formulir Pendaftaran'
          className='w-full flex-row-reverse bg-blue-500 text-white'
          icon='mdi:file-download-outline'
          width='24'
        />
        <Button
          title='Tanya Admin ?'
          className='w-full flex-row-reverse bg-green-500 text-white'
          icon='mdi:whatsapp'
          width='24'
        />
      </div>
    </div>
  )
}

export default Admission
