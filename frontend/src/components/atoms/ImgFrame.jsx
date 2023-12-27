import React from 'react'

const ImgFrame = ({ image, caption, className }) => {
  return (
    <figure className={`flex w-full flex-col items-center ${className}`}>
      <img
        className={`aspect-video w-full rounded-lg bg-slate-400 object-contain object-center p-4 md:max-w-4xl`}
        src={image}
        alt='image description'
      />
      <figcaption className='mt-2 text-center text-sm text-gray-500 dark:text-gray-400'>
        {caption}
      </figcaption>
    </figure>
  )
}

export default ImgFrame
