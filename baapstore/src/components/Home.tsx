import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen m-2 md:m-0">
      <header>
        <Navbar />
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
