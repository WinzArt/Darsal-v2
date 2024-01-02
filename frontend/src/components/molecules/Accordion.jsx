import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
  const [accordioOpen, setAccordionOpen] = useState(false)
  return (
    <div className='border-y-[1px] border-slate-300'>
      <button
        onClick={() => setAccordionOpen(!accordioOpen)}
        className={`relative flex w-full items-center justify-between px-4 py-2 text-lg ${
          accordioOpen
            ? 'border-b-[1px] border-slate-300 text-emerald-700'
            : 'hover:bg-slate-200'
        }`}
      >
        <span
          className={`absolute inset-0 w-1 bg-emerald-700 transition-all delay-300 duration-500 ease-in-out ${
            accordioOpen ? 'h-full' : 'h-0'
          }`}
        ></span>
        <p className='font-semibold'>{title}</p>
        <span className='flex aspect-square items-center border-l-[1px] border-slate-300 pl-2'>
          {accordioOpen ? (
            <Icon icon='line-md:minus' />
          ) : (
            <Icon icon='line-md:plus' />
          )}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          accordioOpen
            ? 'grid-rows-[1fr] pb-8 pt-4 opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className='overflow-hidden px-4'>{content}</p>
      </div>
    </div>
  )
}

export default Accordion
