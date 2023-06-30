import './Navbar.scss'

export const Navbar = (props: any) => {
   return (
      <nav className="navbar">
         <ul className="navbar__list">
            {props.children}
         </ul>
      </nav>
   )
}
