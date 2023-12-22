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
    <div id='mainApp' className='min-h-screen w-full bg-slate-300'>
      <Navbar />
      {isHome ? (
        <Jumbotron />
      ) : (
        <Hero
          image={heroData.image}
          title={heroData.title}
          text={heroData.text}
        />
      )}
      <main className={`${styles.paddingX} min-h-screen pt-28`}>
        <BreadCrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainApp
