import React from 'react'
import { Button, AdminPostCard, Search, AdminTitle } from '../../components'

const Posts = () => {
  return (
    <div className='space-y-4 drop-shadow-sm'>
      <AdminTitle title='Kelola Berita' />
      <div className='space-y-4 rounded-2xl border-2 border-dashed border-gray-500 p-4'>
        <div className='flex h-8 items-center justify-between'>
          <Search placeholder='Cari judul berita...' />
          <Button
            title='Add News'
            icon='mdi:newspaper-plus'
            className='flex-row-reverse bg-blue-400'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <AdminPostCard />
          <AdminPostCard />
          <AdminPostCard />
          <AdminPostCard />
        </div>
        <div>Paginations</div>
      </div>
    </div>
  )
}

export default Posts
