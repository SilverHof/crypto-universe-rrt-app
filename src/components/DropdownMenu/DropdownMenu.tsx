import './DropdownMenu.scss'


export const DropdownMenu = (props: any) => {
   return (
      <div className="dropdown-menu">
         {props.children}
      </div>
   )
}
