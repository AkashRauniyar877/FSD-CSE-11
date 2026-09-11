import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='page-layout'>
      <Header />
      <Nav />
      <div className='page-content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout
