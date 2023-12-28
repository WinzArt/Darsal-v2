import React from 'react'
import { logoDarsal } from '../../assets'

const Divider = ({ className }) => {
  return (
    <div className={`${className} flex w-full items-center gap-8`}>
      <hr className='w-full border-slate-400' />
      <img
        src={logoDarsal}
        alt=''
        className='w-10 rounded-full object-center shadow'
      />
      <hr className='w-full border-slate-400' />
    </div>
  )
}

export default Divider
