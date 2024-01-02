import React from 'react'
import { images, logoDarsal } from '../../../assets'
import { Badge, Button, ImgFrame, Label } from '../../atoms'

const AdminPostCard = () => {
  return (
    <div className='relative rounded-lg border-[1px] border-slate-300 bg-slate-100 p-2 drop-shadow-md'>
      <div className='flex items-center justify-between text-sm font-semibold'>
        <Badge
          title='Published'
          icon='mdi:check-decagram'
          color='blue'
          width='20'
        />
        <Button icon='mdi:text-box-edit-outline' />
      </div>
      <hr className='my-2 border-slate-500' />
      <ImgFrame
        image={images.dayung}
        className='float-left mr-4 max-w-xs md:max-w-md'
      />
      <div className='clear-right flex flex-col justify-between'>
        <Label title='Category' className='bg-blue-100 text-blue-800' />
        <h4 className='font-bold'>Title</h4>
        <p className='line-clamp-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est
          labore temporibus dolore nostrum nemo rerum, beatae illo recusandae,
          qui doloribus neque sapiente ipsum officiis. Excepturi assumenda odio
          saepe? Explicabo soluta mollitia cum veritatis nulla cumque illo,
          repellendus, molestiae eos maxime deserunt officia recusandae?
          Nesciunt rerum atque ullam nihil laboriosam.
        </p>
      </div>
      <div className='absolute bottom-3 flex w-full items-center justify-end gap-2 px-4'>
        <img
          className='aspect-square w-8 rounded-full'
          src={logoDarsal}
          alt=''
        />
        <div className='font-medium'>
          <p>Jese Leos</p>
          <div className='text-xs'>
            <span className='font-normal'>Created </span>August 15, 2014
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPostCard
