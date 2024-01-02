import React from 'react'

const Gallery = ({ imageList, grid }) => {
  return (
    <div
      className={`mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-2 ${
        grid && 'grid-cols-2'
      }`}
    >
      {imageList.map((swiper, i) => (
        <div
          key={i}
          className='group relative self-center overflow-hidden rounded-lg text-white'
        >
          <div
            style={{
              backgroundImage: `url(${swiper.image})`,
            }}
            className={`${
              grid ? 'aspect-video' : 'aspect-3/1'
            } bg-cover bg-center brightness-75 md:aspect-video`}
          ></div>
          <div className='absolute inset-y-full aspect-video w-full cursor-default duration-500 ease-out group-hover:inset-y-0 group-hover:bg-emerald-600/50 group-hover:backdrop-blur-sm'></div>
          <div className='absolute -bottom-4 h-1/2 px-2 delay-150 duration-300 ease-in-out group-hover:bottom-20 md:-bottom-10 md:px-8'>
            <h4 className='mb-2 font-semibold md:text-2xl'>{swiper.title}</h4>
            <p className='tracking-tighter opacity-0 delay-200 duration-500 group-hover:opacity-100 md:text-xl'>
              {swiper.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
