import React from 'react'
import { Button, Search, AdminTitle } from '../../components'
import { logoDarsal } from '../../assets'

const Users = () => {
  return (
    <div className='space-y-4'>
      <AdminTitle title='Kelola User Admin' />
      <div className='space-y-4 rounded-3xl border-2 border-dashed border-gray-500 p-4'>
        <div className='flex h-8 w-full items-center justify-between'>
          <Search placeholder='Cari nama user...' />
          <div className='flex gap-2'>
            <Button
              title='Add User'
              icon='mdi:account-plus-outline'
              className='flex-row-reverse bg-blue-400'
            />
            <Button
              title='Export'
              icon='mdi:file-download-outline'
              className='flex-row-reverse bg-gray-50'
            />
          </div>
        </div>
        <div className='relative overflow-x-auto rounded-lg shadow-md'>
          <table className='w-full table-fixed text-left text-sm'>
            <thead>
              <tr className='flex h-12 items-center border-b-2 border-black bg-gray-400 px-2 uppercase'>
                <th scope='col' className='w-1/4 text-center'>
                  #
                </th>
                <th scope='col' className='w-1/2'>
                  Name
                </th>
                <th scope='col' className='w-1/2'>
                  Email
                </th>
                <th scope='col' className='w-1/4'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='flex items-center border-b border-red-500 odd:bg-white even:bg-gray-100'>
                <td className='w-1/4 text-center'>1</td>
                <td scope='row' className='flex w-1/2 items-center gap-2 py-2'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={logoDarsal}
                    alt='Jese image'
                  />
                  <p className='text-base font-semibold'>Neil Sims</p>
                </td>
                <td className='w-1/2'>Email@mail.com</td>
                <td className='flex w-1/4 items-center gap-2'>
                  <Button
                    icon='mdi:account-edit-outline'
                    color='white'
                    className='bg-blue-500 '
                  />
                  <Button
                    icon='mdi:delete-forever-outline'
                    color='white'
                    className='bg-red-500'
                  />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className='flex h-12 items-center border-t-2 border-black bg-gray-400 px-2'>
                <td colSpan='4'>Pagination</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users
