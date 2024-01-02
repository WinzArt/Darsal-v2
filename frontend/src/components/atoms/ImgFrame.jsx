import React from 'react'

const ImgFrame = ({ image, caption, className, isPNG, imgClass }) => {
  return (
    <figure
      className={`flex w-full flex-col items-center rounded-lg drop-shadow-md ${className}`}
    >
      <img
        className={` ${
          isPNG ? 'object-contain p-8' : 'object-cover'
        } aspect-video w-full rounded-lg md:max-w-4xl ${imgClass}`}
        src={image}
        alt='image description'
      />
      {caption && (
        <figcaption className='mt-2 text-center text-sm text-gray-500 dark:text-gray-400'>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default ImgFrame
