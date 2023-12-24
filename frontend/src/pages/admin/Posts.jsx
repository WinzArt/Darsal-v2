import React from 'react'
import { Button, PostCard, Search, Title } from '../../components'

const Posts = () => {
  return (
    <div className='space-y-4'>
      <Title title='Kelola Berita' />
      <div className='rounded-lg border-2 border-dashed border-gray-500 p-4'>
        <div className='flex items-center justify-between pb-4'>
          <Search placeholder='Cari judul berita...' />
          <Button
            title='Add News'
            icon='mdi:newspaper-plus'
            width='24'
            className='flex-row-reverse bg-gray-50'
          />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <div>Paginations</div>
    </div>
  )
}

export default Posts
