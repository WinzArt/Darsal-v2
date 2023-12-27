import React from 'react'
import { logoDarsal } from '../assets'
import { ImgFrame, PageBreak, SwiperSmall } from '../components'
import { aboutSwiper } from '../utils'

const About = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-4 md:block'>
        <h1 className='my-8 text-6xl font-extrabold text-emerald-700'>
          Profil
        </h1>
        <ImgFrame
          image={logoDarsal}
          caption='Image Caption'
          className='order-last float-right md:order-none md:ml-8 md:max-w-xl'
        />
        <p className='clear-left text-justify indent-16 text-lg font-medium leading-relaxed tracking-tight'>
          Sekolah Menengah Kejuruan (SMK) Darussalam didirikan pada tahun 2009
          dengan SK Pendirian Nomor 800/1666-Dispen 2009 di Kota Tangerang
          Selatan Provinsi Banten atas Prakarsa Ketua Yayasan Pendidikan Islam
          Modern Darussalam{' '}
          <span className='whitespace-nowrap font-serif font-semibold'>
            Bapak H. Salman Faris, S.E.
          </span>
          <br />
          <br />
          SMK Darussalam Pamulang yang beralamat Puri Pamulang Kec. Pamulang
          Kota Tangerang Selatan Provinsi Banten dipimpin oleh{' '}
          <span className='whitespace-nowrap font-serif font-semibold'>
            Bapak H. Muhibudin Mutawalli, S.Ag.
          </span>{' '}
          dengan jumlah tenaga pengajar 40 orang dan Staff serta Tata Usaha.
        </p>
      </div>
      <div className='relative'>
        <div
          style={{ backgroundImage: `url(${logoDarsal})` }}
          className={`mx-auto aspect-video w-full max-w-4xl bg-[length:20rem] bg-center bg-no-repeat opacity-30 brightness-150 md:bg-[length:25rem]`}
        ></div>
        <div className='absolute inset-0 mx-auto flex max-w-xl flex-col items-center justify-center gap-2 md:max-w-3xl'>
          <h2 className='text-xl font-semibold md:text-2xl'>VISI :</h2>
          <p className='text-center font-medium leading-relaxed md:text-xl'>
            “SMK Darussalam sebagai pusat pengembangan sumber daya manusia yang
            handal, profesional dan menghasilkan lulusan tenaga kerja terampil,
            profesional serta berakhlak mulia”
          </p>
          <hr className='h-2 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent' />
          <h2 className='text-xl font-semibold md:text-2xl'>MISI :</h2>
          <p className='text-center font-medium leading-relaxed md:text-xl'>
            “Melaksanakan pendidikan latihan kerja dengan pengembangan IPTEK dan
            imtaq, serta bersinergi dengan instansi pasangan sebagai wahana
            pengembangan keterampilan bagi para lulusan.”
          </p>
        </div>
      </div>
      <PageBreak
        quote='Fasilitas SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-end'
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
      <div className='flex flex-col items-center gap-4'>
        <h1 className='mb-6 text-center text-2xl font-bold'>
          Struktur Organisasi <br /> SMK Darussalam
        </h1>
        <ImgFrame image={logoDarsal} caption='Image Caption' className='' />
      </div>
    </div>
  )
}

export default About
