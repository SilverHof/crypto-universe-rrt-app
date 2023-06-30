import { useEffect, useState } from 'react'
import './NavbarItem.scss'

export const NavbarItem = ({text, children}) => {

   const [open, setOpen] = useState<boolean>(false);


   useEffect(() => {

      const handler = (event) => {
         if (event.target) {
            setOpen(false);
         }
      }

      document.addEventListener("mousedown", handler);
   });

   return (
      <a className="navbar-item">
         <span className="navbar-item__text" onClick={() => setOpen(!open)}>
            {text}
         </span>
         { open && children}
      </a>
   )
}
