import { NavLink } from 'react-router-dom'
import './NavigatorLink.scss'


export const NavigatorLink = ({ to, icon, text }) => {

   const setActive = ({isActive}) => isActive ? `navigator-link_active` : `navigator-link`;

   return (
      <NavLink to={to} className={setActive}>
         {icon}
         {text}
      </NavLink>
   )
}
