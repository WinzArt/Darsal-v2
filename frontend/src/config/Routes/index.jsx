import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import {
  Home,
  Admin,
  About,
  Academic,
  Users,
  Posts,
  MainAdmin,
} from '../../pages'
import MainApp from '../../pages/MainApp'

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainApp />}>
          <Route index element={<Home />} />
          <Route path='admin' element={<MainAdmin />}>
            <Route index element={<Admin />} />
            <Route path='kelola-users' element={<Users />} />
            <Route path='kelola-berita' element={<Posts />} />
          </Route>
          <Route path='tentang-kami' element={<About />} />
          <Route path='akademik' element={<Academic />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoute
