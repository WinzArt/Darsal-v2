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
  Post,
  Login,
} from '../../pages'

function ScrollToTop() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const MyRoute = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='login' element={<Login />} />
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
          <Route path='berita'>
            <Route index element={<News />} />
            <Route path='post' element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoute
