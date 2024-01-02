import { Icon } from '@iconify/react'
import React from 'react'

const Button = ({ title, type, className, icon }) => {
  return (
    <button
      type={type}
      className={`${className} flex items-center justify-center gap-1 rounded-md border border-transparent p-1.5 py-1 text-xs font-semibold ring-[1px] ring-slate-500 drop-shadow-sm transition-all duration-300 ease-in-out hover:brightness-95 active:scale-90`}
    >
      {title}
      <Icon icon={icon} width={title ? '1.5em' : '1rem'} />
    </button>
  )
}

export default Button
