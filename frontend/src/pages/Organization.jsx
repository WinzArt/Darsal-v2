import React from 'react'
import { ImgFrame, PageBreak, SwiperSmall } from '../components'
import { batik, images, logo } from '../assets'
import { ekskul } from '../utils'

const Organization = () => {
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex flex-col gap-4 md:block'>
        <h1 className='my-8 font-extrabold text-emerald-700'>Osis</h1>
        <ImgFrame
          image={logo.logoOsis}
          caption='Osis SMK Darussalam'
          className='order-last float-right md:order-none md:ml-8 md:max-w-xl'
          imgClass='bg-slate-400'
          isPNG={true}
        />
        <p className='clear-left text-justify text-lg font-medium leading-relaxed tracking-tight md:mb-4'>
          OSIS merupakan kegiatan pembinaan peserta didik melalui praktek
          organisasi intra sekolah yang dilaksanakan oleh peserta didik dibawah
          tanggungjawab Bidang Kesiswaan SMK Darussala Pamulang.
        </p>
        <div className='order-last clear-left space-y-4'>
          <h2 className='font-bold text-emerald-700 md:text-black'>
            Fungsi OSIS
          </h2>
          <p className='text-justify text-lg font-medium leading-relaxed tracking-tight'>
            Salah satu ciri pokok suatu organisasi ialah memiliki berbagai macam
            fungsi. Demikian pula OSIS SMK Darussalam sebagai suatu organisasi
            memiliki pula beberapa fungsi dalam mencapai tujuan. Sebagai salah
            satu jalur dari pembinaan kesiswaan, fungsi OSIS adalah:
          </p>
        </div>
        <ul className='relative order-last flex w-full list-inside list-decimal flex-col gap-x-4 gap-y-8 px-8 text-justify tracking-tight md:mt-12 md:flex-row'>
          <div className='md:w-1/3'>
            <h4 className='list-item font-medium'>Sebagai Wadah</h4>
            <hr className='mx-8 my-2 border-black' />
            <p className='indent-8'>
              Organisasi Siswa Intra Sekolah (OSIS) SMK Darussalam merupakan
              satu-satunya wadah kegiatan para siswa di sekolah bersama dengan
              jalur pembinaan yang lain untuk mendukung tercapainya pembinaan
              kesiswaan.
            </p>
          </div>
          <div className='md:w-1/3'>
            <h4 className='list-item font-medium'>Sebagai Motivator</h4>
            <hr className='mx-8 my-2 border-black' />
            <p className='indent-8'>
              Motivator adalah perangsang yang menyebabkan lahirnya keinginan
              dan semangat para siswa untuk berbuat dan melakukan kegiatan
              bersama dalam mencapai tujuan. OSIS SMK Darussalam sebagai
              motivator berperan untuk menggali minat dan bakat peserta didik
              serta mengembangkannya melalui kegiatan-kegiatan OSIS dan
              Ekstrakurikuler.
            </p>
          </div>
          <div className='md:w-1/3'>
            <h4 className='list-item font-medium'>Sebagai Preventif</h4>
            <hr className='mx-8 my-2 border-black' />
            <p className='indent-8'>
              Apabila fungsi yang bersifat intelek dalam arti secara internal
              OSIS SMK Darussalam dapat menggerakkan sumber daya yang ada dan
              secara eksternal OSIS SMK Darussalam mampu beradaptasi dengan
              lingkungan, seperti menyelesaikan persoalan perilaku menyimpang
              siswa dan sebagainya. Dengan demikian secara prepentif OSIS ikut
              mengamankan sekolah dari segala ancaman dari luar maupun dari
              dalam sekolah. Fungsi preventif OSIS akan terwujud apabila fungsi
              OSIS SMK Darussalam sebagai pendorong lebih dahulu harus dapat
              diwujudkan.
            </p>
          </div>
          <ImgFrame
            image={logo.logoOsis}
            className='absolute inset-x-0 top-1/2 -z-10 mx-auto max-w-3xl -translate-y-1/2 bg-transparent opacity-30'
            isPNG={true}
          />
        </ul>
      </div>
      <PageBreak
        quote='Ekstrakurikuler SMK Darusaalam'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deserunt fuga? Officiis iusto est exercitationem?'
        className='md:justify-start'
      />

      <div className='flex flex-col gap-8 py-4'>
        <div className='flex flex-col gap-4 md:block'>
          <ImgFrame
            image={images.silat}
            caption='Silat SMK Darussalam'
            className='float-left md:mr-4 md:max-w-xl md:pr-4 2xl:max-w-2xl'
            imgClass='object-bottom'
          />
          <h2 className='clear-right font-bold leading-none text-emerald-700 md:mb-4'>
            Kegiatan Non-Akademik
          </h2>
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
            image={images.paskibra}
            caption='Paskibra SMK Darussalam'
            className='order-last float-right md:ml-4 md:max-w-xl md:pl-4 2xl:max-w-2xl'
            imgClass='object-center'
          />
          <h2 className='clear-left font-bold leading-none text-emerald-700 md:mb-4'>
            Paskibra
          </h2>
          <p className='clear-left'>
            2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            inventore atque amet maiores temporibus labore cum porro, libero, ab
            commodi facilis consequatur vero, dicta dolorem consequuntur quas
            voluptatem necessitatibus saepe neque quod alias maxime! Dicta
            aspernatur ducimus deleniti praesentium cupiditate.
          </p>
        </div>
        <div className='order-last clear-both space-y-4'>
          <h2 className='font-bold leading-none text-emerald-700'>
            Ekstrakurikuler
          </h2>
          <p className='clear-left'>
            3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            inventore atque amet maiores temporibus labore cum porro, libero, ab
            commodi facilis consequatur vero, dicta dolorem consequuntur quas
            voluptatem necessitatibus saepe neque quod alias maxime! Dicta
            aspernatur ducimus deleniti praesentium cupiditate.
          </p>
        </div>
      </div>
      <div className='relative mb-10 drop-shadow-md sm:mb-0 2xl:self-center'>
        <div
          style={{
            backgroundImage: `url(${batik})`,
          }}
          className='absolute -bottom-14 -left-10 h-1/3 w-screen rounded-lg bg-emerald-500 bg-[length:15rem] bg-repeat md:-left-14'
        ></div>
        <SwiperSmall
          imageList={ekskul}
          next='organization-next1'
          prev='organization-prev1'
        />
      </div>
    </div>
  )
}

export default Organization
