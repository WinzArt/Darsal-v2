import React from 'react'
import { Button, Label, Search, Title } from '../../components'
import { logoDarsal } from '../../assets'

const Admin = () => {
  return (
    <div className='space-y-4'>
      <Title title='Admin Dashboard' />
      <div className='flex flex-col gap-4 rounded-lg border-2 border-dashed border-gray-500 p-4'>
        <div className='grid grid-cols-4 gap-4'>
          <div className='flex flex-col items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow'>
            <p className='font-bold'>Post in a week</p>
            <h5 className='self-end rounded-lg border-b-2 border-r-2 border-blue-500 bg-slate-100 p-2 text-8xl font-extrabold text-black shadow'>
              20
            </h5>
          </div>
        </div>
        {/* <div className='flex w-full items-center justify-between pb-4'>
          <Search placeholder='Cari nama user...' />
          <div className='flex gap-2'>
            <Button
              title='Add User'
              icon='mdi:plus'
              width='24'
              className='flex-row-reverse bg-gray-50'
            />
            <Button
              title='Export'
              icon='mdi:file-download-outline'
              width='24'
              className='flex-row-reverse bg-gray-50'
            />
          </div>
        </div> */}
        <div className='relative overflow-x-auto rounded-lg bg-white p-4 shadow-md'>
          <div className='flex w-full items-center justify-between py-4'>
            <h3 className='text-lg font-semibold'>Postingan terakhir</h3>
            <Button
              title='Filter by'
              icon='mdi:filter-menu-outline'
              width='24'
              className='flex-row-reverse bg-gray-50'
            />
          </div>
          <table className='w-full table-fixed overflow-hidden rounded-lg text-left text-sm'>
            <thead>
              <tr className='flex h-12 items-center border-b-2 border-black bg-gray-400 px-2 uppercase'>
                <th scope='col' className='w-1/12 p-4 text-center'>
                  #
                </th>
                <th scope='col' className='w-1/2 p-4'>
                  Judul
                </th>
                <th scope='col' className='w-1/2 p-4'>
                  Author
                </th>
                <th scope='col' className='w-1/2 p-4'>
                  Keterangan
                </th>
                <th scope='col' className='w-1/4 p-4'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='flex items-center border-b border-red-500 odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                <td className='w-1/12 p-4 text-center'>1</td>
                <td className='w-1/2 p-4'>
                  Judul berita yang dibuat lebih panjang untuk melihat
                  tampilanya masih ditambah panjang.
                </td>
                <td scope='row' className='flex w-1/2 items-center gap-1 p-4'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={logoDarsal}
                    alt='Jese image'
                  />
                  <div>
                    <p className='text-base font-semibold'>Neil Sims</p>
                    <p class='font-normal text-gray-500'>
                      neil.sims@flowbite.com
                    </p>
                  </div>
                </td>
                <td className='w-1/2 p-4'>Created August 15, 2014</td>
                <td className='w-1/4 p-4'>
                  <Label
                    title='Publish'
                    className='bg-blue-100 text-blue-800'
                  />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className='flex h-12 items-center justify-between border-t-2 border-black bg-gray-400 px-2'>
                Pagination
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin
