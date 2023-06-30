import './Header.scss'
import { Account } from './components/Account/Account'
import { Navbar } from './components/Navbar/Navbar'
import { SearchForm } from './components/SearchForm'
import { NavbarItem } from './components/Navbar/NavbarItem'
import { DropdownMenu } from './components/DropdownMenu/DropdownMenu'
import { DropdownItem } from './components/DropdownMenu/DropdownItem'

import { UilWifi } from '@iconscout/react-unicons'
import { UilFile } from '@iconscout/react-unicons'

import { UilMobileAndroid } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { UilExchange } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'

import { UilBookAlt } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilWallet } from '@iconscout/react-unicons'


export const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__inner">

               <Navbar>
                  <NavbarItem text="Community">
                     <DropdownMenu>
                        <DropdownItem
                           classname="dropdown-item__icon-box_blue" 
                           text="Feeds" 
                           icon={<UilWifi class="dropdown-item__icon"/>}
                        />
                        <DropdownItem
                           classname="dropdown-item__icon-box_purple"  
                           text="Articles" 
                           icon={<UilFile class="dropdown-item__icon"/>}
                        />
                     </DropdownMenu>
                  </NavbarItem>

                  <NavbarItem text="Products">
                     <DropdownMenu>
                        <DropdownItem
                           classname="dropdown-item__icon-box_blue" 
                           text="Mobile Apps" 
                           icon={<UilMobileAndroid class="dropdown-item__icon"/>}
                        />
                        <DropdownItem
                           classname="dropdown-item__icon-box_green"  
                           text="Blockchain Explorer" 
                           icon={<UilSearch class="dropdown-item__icon"/>}
                        />
                        <DropdownItem
                           classname="dropdown-item__icon-box_purple"  
                           text="Converter" 
                           icon={<UilExchange class="dropdown-item__icon"/>}
                        />
                        <DropdownItem
                           classname="dropdown-item__icon-box_red"  
                           text="Crypto API" 
                           icon={<UilArrow class="dropdown-item__icon"/>}
                        />
                     </DropdownMenu>
                  </NavbarItem>

                  <NavbarItem text="Learn">
                     <DropdownMenu>
                        <DropdownItem
                           classname="dropdown-item__icon-box_blue" 
                           text="Glossary" 
                           icon={<UilBookAlt class="dropdown-item__icon"/>}
                        />
                        <DropdownItem
                           classname="dropdown-item__icon-box_red"  
                           text="Videos" 
                           icon={<UilPlayCircle class="dropdown-item__icon"/>}
                        />
                        <DropdownItem
                           classname="dropdown-item__icon-box_orange"  
                           text="Conference" 
                           icon={<UilUsersAlt class="dropdown-item__icon"/>}
                        />
                        <DropdownItem
                           classname="dropdown-item__icon-box_green"  
                           text="Where to Buy" 
                           icon={<UilWallet class="dropdown-item__icon"/>}
                        />
                     </DropdownMenu>
                  </NavbarItem>
                  
               </Navbar>
               <SearchForm />
               <Account />
               
            </div>
         </div>
      </header>
   )
}
