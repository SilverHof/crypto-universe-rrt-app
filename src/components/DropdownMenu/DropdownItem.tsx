import React from 'react'
import './DropdownItem.scss'

export const DropdownItem = ({ classname, icon, text }) => {
   return (
      <a 
         className="dropdown-item"
         href=''
      >
         <div 
            className={`"dropdown-item__icon-box" ${classname}`}
         >
            {icon}
         </div>
         <span className="dropdown-item__text">
            {text}
         </span>
      </a>
   )
}
