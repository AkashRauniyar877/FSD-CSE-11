
import Header from "../components/Header"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"
const Userlayout = () => {
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

export default Userlayout

