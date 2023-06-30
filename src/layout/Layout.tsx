import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import { AsideNavbar } from './AsideNavbar/AsideNavbar'
import './Layout.scss'


export const Layout = () => {
   return (
      <div className="body-block">
         <AsideNavbar />
         <div className="wrapper">
            <Header />
            <Outlet />
            <Footer />
         </div>
      </div>
   )
}
