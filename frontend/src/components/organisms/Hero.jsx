import React from 'react'
import { useLocation } from 'react-router-dom'
import { styles } from '../../styles'
import { PageBreak } from '../molecules'

const Hero = ({ title, image, text }) => {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <div className='relative'>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`relative aspect-square w-full bg-no-repeat sm:h-[36rem] ${
          isAdmin
            ? 'bg-transparent bg-[length:20rem] bg-[center_bottom_25%] backdrop-brightness-75'
            : 'bg-cover bg-center bg-no-repeat brightness-50'
        }`}
      ></div>
      <PageBreak quote={`${title}`} text={text} isJumbotron={true} />
    </div>
  )
}

export default Hero
