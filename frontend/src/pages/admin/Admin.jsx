import React from 'react'
import { Button, Label, AdminTitle } from '../../components'
import { logoDarsal } from '../../assets'

const Admin = () => {
  return (
    <div className='space-y-4'>
      <AdminTitle title='Admin Dashboard' />
      <div className='flex flex-col gap-4 rounded-lg border-2 border-dashed border-gray-500 p-4'>
        <div className='grid grid-cols-4 gap-4'>
          <div className='flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow'>
            <p className='font-bold'>Post in a week</p>
            <h1 className='self-center rounded-lg border-b-2 border-r-2 border-emerald-700 bg-slate-100 p-2 font-extrabold text-emerald-700 shadow md:self-end md:text-8xl'>
              20
            </h1>
          </div>
        </div>
        <div className='relative overflow-x-auto rounded-lg bg-white p-4 shadow-md'>
          <div className='flex w-full items-center justify-between py-4'>
            <h4 className='font-semibold'>Postingan terakhir</h4>
            <Button
              title='Filter by'
              icon='mdi:filter-menu-outline'
              width='24'
              className='flex-row-reverse bg-gray-50'
            />
          </div>
          <table className='w-full table-fixed overflow-hidden rounded-lg text-left text-xs'>
            <thead>
              <tr className='flex h-12 items-center border-b-2 border-black bg-gray-400 uppercase'>
                <th scope='col' className='w-1/12 p-2 text-center'>
                  #
                </th>
                <th scope='col' className='w-1/2 p-2'>
                  Judul
                </th>
                <th scope='col' className='w-1/3 p-2'>
                  Author
                </th>
                <th scope='col' className='w-1/6 p-2'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='flex items-center border-b border-red-500 odd:bg-white even:bg-gray-100 hover:bg-gray-200'>
                <td className='w-1/12 p-2 text-center'>1</td>
                <td className='line-clamp-3 w-1/2 px-2'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur sapiente deserunt esse. Numquam,
                  atque!
                </td>
                <td scope='row' className='w-1/3 space-y-2 p-2'>
                  <div className='flex items-center gap-1'>
                    <img
                      className='h-8 w-8 rounded-full'
                      src={logoDarsal}
                      alt='Jese image'
                    />
                    <p className='font-semibold'>Neil Sims</p>
                  </div>
                  <p className='text-xs'>Created August 15, 2014</p>
                </td>
                <td className='w-1/6 p-2'>
                  <Label
                    title='Publish'
                    className='bg-blue-100 text-blue-800'
                  />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className='flex h-12 items-center justify-between border-t-2 border-black bg-gray-400 px-2'>
                <td>Pagination</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin
