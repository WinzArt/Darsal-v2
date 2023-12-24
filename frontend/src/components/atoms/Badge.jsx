import React from 'react'
import { Icon } from '@iconify/react'

const Badge = ({ title, ...rest }) => {
  return (
    <p className='flex items-center gap-1'>
      <Icon {...rest} />
      {title}
    </p>
  )
}

export default Badge
