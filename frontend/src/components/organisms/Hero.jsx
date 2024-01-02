import React from 'react'
import { useLocation } from 'react-router-dom'
import { PageBreak } from '../molecules'

const Hero = ({ title, image, text }) => {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <div className='relative'>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`relative aspect-square w-full bg-center bg-no-repeat sm:h-[36rem] ${
          isAdmin
            ? 'bg-slate-400 bg-[length:20rem] backdrop-brightness-50'
            : 'bg-cover brightness-50'
        }`}
      ></div>
      <PageBreak quote={`${title}`} text={text} isJumbotron={true} />
    </div>
  )
}

export default Hero
