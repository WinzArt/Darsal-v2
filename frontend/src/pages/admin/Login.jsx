import React from 'react'
import { batik, logoDarsal } from '../../assets'
import { Icon } from '@iconify/react'
import { Button, Input } from '../../components'

const Login = () => {
  return (
    <div className=' h-screen w-full bg-slate-200'>
      {/* <!-- Main modal --> */}
      <div
        id='authentication-modal'
        className='container fixed inset-0 z-50 flex h-screen max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden'
      >
        <div className='relative flex aspect-video max-h-full w-full max-w-3xl items-center justify-between overflow-hidden rounded-lg bg-white bg-gradient-to-t shadow'>
          <div
            style={{
              backgroundImage: `url(${batik})`,
            }}
            className='absolute inset-0 h-full w-1/2 bg-[length:15rem] bg-right bg-repeat'
          ></div>
          <div className='relative w-1/2 p-4'>
            <img
              src={logoDarsal}
              alt=''
              className='mx-auto aspect-square rounded-full bg-white p-4 shadow-inner shadow-black/50 brightness-110 drop-shadow-md md:max-w-xs'
            />
          </div>
          {/* <!-- Modal content --> */}
          <div className='relative aspect-square w-1/2'>
            {/* <!-- Modal header --> */}
            <div className='flex items-center justify-between rounded-t border-b p-4 md:p-5'>
              <h4 className='font-semibold'>Masuk sebagai Admin</h4>
              <button
                type='button'
                className='inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-gray-500 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 active:scale-90'
                data-modal-hide='authentication-modal'
              >
                <Icon icon='line-md:close-small' width='2em' className='' />
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className='p-4 md:p-5'>
              <form className='space-y-4' action='#'>
                <Input id='email' label='Email' type='email' icon='mdi:email' />
                <Input
                  id='password'
                  label='Password'
                  type='password'
                  icon='mdi:lock'
                />
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center'>
                      <input
                        id='remember'
                        type='checkbox'
                        value=''
                        className='h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-300 '
                        required
                      />
                    </div>
                    <label
                      for='remember'
                      className='ms-2 text-xs font-medium text-gray-900'
                    >
                      Biarkan tetap masuk
                    </label>
                  </div>
                  <a
                    href='#'
                    className='text-xs text-blue-700 hover:underline '
                  >
                    Lupa Password?
                  </a>
                </div>
                <Button
                  type='submit'
                  title='Masuk'
                  className='w-full bg-blue-500 text-white'
                />
                <div className='text-xs font-medium text-gray-500'>
                  Belum Terdaftar?{' '}
                  <a href='#' className='text-blue-700 hover:underline '>
                    Hubungi Pengelola
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
