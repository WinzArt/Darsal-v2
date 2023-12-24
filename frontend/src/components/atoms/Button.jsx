import { Icon } from '@iconify/react'
import React from 'react'

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      type='button'
      className={`${className} flex items-center justify-center gap-1 rounded-lg border border-transparent p-2 py-1 text-sm font-semibold leading-tight ring-2 ring-slate-500 hover:brightness-90`}
    >
      {title}
      <Icon {...rest} />
    </button>
  )
}

export default Button
