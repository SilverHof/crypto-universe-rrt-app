import { useEffect, useRef, useState } from 'react'
import './NavbarItem.scss'

export const NavbarItem = ({text, children}) => {

   const [open, setOpen] = useState<boolean>(false);


   useEffect(() => {

      const handler = (event: MouseEvent) => {
         if (event.target) {
            setOpen(false);
         }
      }

      document.addEventListener("mousedown", handler);
   });

   return (
      <a className="navbar-item" onClick={() => setOpen(true)}>
         <span className="navbar-item__text">
            {text}
         </span>
         { open && children}
      </a>
   )
}
