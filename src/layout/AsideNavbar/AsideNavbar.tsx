import './AsideNavbar.scss'


import { UilBitcoin } from '@iconscout/react-unicons'

import { UilEstate } from '@iconscout/react-unicons'
import { UilAnalysis } from '@iconscout/react-unicons'
import { UilNewspaper } from '@iconscout/react-unicons'

import { UilUserCircle } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'
import { UilWallet } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilSignout } from '@iconscout/react-unicons'
import { useState } from 'react'
import { NavigatorList } from '../../routes/Navigator/NavigatorList'
import { NavigatorLink } from '../../routes/Navigator/NavigatorLink'


export const AsideNavbar = () => {

   const [isAuth, setIsAuth] = useState<boolean>(true);

   return (
      <aside className="aside-navbar">
         <div className="aside-navbar__container">
            <div className="aside-navbar__inner">
               <div className="aside-navbar__sticky">

                  <div className="aside-navbar__empty-block"></div>

                  <div className="aside-navbar__title-box">
                     <span className="aside-navbar__title-text">
                        Crypto
                     </span>
                        <UilBitcoin className="aside-navbar__title-icon"/>
                     <span className="aside-navbar__title-text">
                        Universe
                     </span>
                  </div>

                  <NavigatorList>
                     <NavigatorLink 
                        to={'/'}
                        icon={<UilEstate className="navigator-link__icon" />}
                        text={'Home'}
                     />
                     <NavigatorLink 
                        to={'/cryptocurrencies'}
                        icon={<UilAnalysis className="navigator-link__icon" />}
                        text={'Cryptocurrencies'}
                     />
                     <NavigatorLink 
                        to={'/news'}
                        icon={<UilNewspaper className="navigator-link__icon" />}
                        text={'News'}
                     />
                  </NavigatorList>

                  <div className="aside-navbar__decor"></div>

                  
                  {isAuth && 
                  <NavigatorList>
                     <NavigatorLink 
                        to={'/notfound'}
                        icon={<UilUserCircle className="navigator-link__icon" />}
                        text={'Profile'}
                     />
                     <NavigatorLink 
                       to={'/notfound'}
                        icon={<UilBag className="navigator-link__icon" />}
                        text={'Wallet'}
                     />
                     <NavigatorLink 
                        to={'/notfound'}
                        icon={<UilWallet className="navigator-link__icon" />}
                        text={'Portfolio'}
                     />
                     <NavigatorLink 
                        to={'/notfound'}
                        icon={<UilBell className="navigator-link__icon" />}
                        text={'Notificaitons'}
                     />
                     <NavigatorLink 
                        to={'/notfound'}
                        icon={<UilSetting className="navigator-link__icon" />}
                        text={'Settings'}
                     />
                  </NavigatorList>}
                  
                  <div className="aside-navbar__decor"></div>
                  <div className="aside-navbar__decor"></div>
                  
                  {isAuth && 
                  <NavigatorList>
                     <NavigatorLink 
                        to={'/notfound'}
                        icon={<UilSignout className="navigator-link__icon" />}
                        text={'Log Out'}
                     />
                  </NavigatorList>}
                  
               </div>
            </div>
         </div>
      </aside>
   )
}