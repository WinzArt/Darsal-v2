import React from 'react'
import { ImgFrame, Label } from '../atoms'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { images } from '../../assets'

const PostCard = () => {
  return (
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
          <h4 className='line-clamp-2 font-bold group-hover:underline'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
            velit.
          </h4>
          <div className='flex items-center gap-1 text-xs'>
            <Icon icon='mdi:clock-time-eight' />
            <p>21 December 2023, 10:33 WIB</p>
          </div>
          <p className='line-clamp-3 hidden'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est
            labore temporibus dolore nostrum nemo rerum, beatae illo recusandae,
            qui doloribus neque sapiente ipsum officiis. Excepturi assumenda
            odio saepe? Explicabo soluta mollitia cum veritatis nulla cumque
            illo, repellendus, molestiae eos maxime deserunt officia recusandae?
            Nesciunt rerum atque ullam nihil laboriosam.
          </p>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
