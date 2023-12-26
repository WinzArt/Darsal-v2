import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Jumbotron, Footer, Hero, Navbar, BreadCrumbs } from '../components'
import { hero } from '../utils'
import { styles } from '../styles'

const MainApp = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const currentHero = hero.find((item) => location.pathname.includes(item.path))
  const heroData = currentHero || {}

  return (
    <div id='mainApp' className='min-h-screen w-full'>
      <Navbar />
      {isHome ? (
        <Jumbotron
          next='jumbotron-next'
          prev='jumbotron-prev'
          isJumbotron={true}
        />
      ) : (
        <Hero
          image={heroData.image}
          title={heroData.title}
          text={heroData.text}
        />
      )}
      <main
        className={` ${
          !isHome ? styles.paddingX : styles.padding
        } mb-16 min-h-screen overflow-x-hidden`}
      >
        {!isHome && <BreadCrumbs />}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainApp
