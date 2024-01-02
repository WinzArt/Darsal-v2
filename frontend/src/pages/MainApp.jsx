import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Jumbotron, Footer, Hero, Navbar, BreadCrumbs } from '../components'
import { hero } from '../utils'
import { styles } from '../styles'

const MainApp = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isBlog = location.pathname.includes('/berita')

  const currentHero = hero.find((item) => location.pathname.includes(item.path))
  const heroData = currentHero || {}

  return (
    <div
      id='mainApp'
      className='min-h-screen w-full overflow-x-hidden transition-all duration-300'
    >
      <Navbar isBlog={isBlog} />
      {isHome ? (
        <Jumbotron
          next='jumbotron-next'
          prev='jumbotron-prev'
          isJumbotron={true}
        />
      ) : (
        !isBlog && (
          <Hero
            image={heroData.image}
            title={heroData.title}
            text={heroData.text}
          />
        )
      )}
      <main
        className={`${styles.padding} mb-12 min-h-screen xl:container ${
          !isHome && 'sm:pt-0'
        } ${isBlog && 'sm:pt-16 md:pt-44'}`}
      >
        {!isHome && <BreadCrumbs />}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainApp
