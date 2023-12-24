import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import {
  MainApp,
  MainAdmin,
  Admin,
  Home,
  About,
  Academic,
  Users,
  Posts,
  Admission,
  Organization,
  Achievment,
  News,
} from '../../pages'

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
          <Route path='pendaftaran' element={<Admission />} />
          <Route path='organisasi' element={<Organization />} />
          <Route path='prestasi' element={<Achievment />} />
          <Route path='berita' element={<News />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoute
