import React from 'react'

const Label = ({ title, className }) => {
  return (
    <span
      className={`${className} w-fit rounded px-2.5 py-0.5 text-xs font-medium`}
    >
      {title}
    </span>
  )
}

export default Label
