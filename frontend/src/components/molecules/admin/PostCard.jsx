import React from 'react'
import { img1, logoDarsal } from '../../../assets'
import { Badge, Button, Label } from '../../atoms'
import { Icon } from '@iconify/react'

const PostCard = () => {
  return (
    <div className='flex aspect-3/4 w-full flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800'>
      <div className='flex items-center justify-between'>
        <Badge
          title='Published'
          icon='mdi:check-decagram'
          color='blue'
          width='24'
        />
        <Button className='bg-slate-50 !p-1' icon='lucide:view' width='24' />
      </div>
      <a href='#'>
        <img className='rounded-lg' src={img1} alt={img1} />
      </a>
      <Label title='Category' className='bg-blue-100 text-blue-800' />
      <div className='space-y-4'>
        <a href='#'>
          <h5 className='line-clamp-2 h-16 text-2xl font-extrabold tracking-tight text-black'>
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className='line-clamp-5 text-justify font-normal'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order. Here are the biggest enterprise
          technology acquisitions of 2021 so far, in reverse chronological
          order.
        </p>
        <div class='flex items-center gap-4'>
          <img class='h-10 w-10 rounded-full' src={logoDarsal} alt='' />
          <div class='font-medium'>
            <div>Jese Leos</div>
            <div class='text-sm'>
              <span className='font-normal'>Created </span>August 15, 2014
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
