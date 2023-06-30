import './NavigatorList.scss'


export const NavigatorList = (props: any) => {

   return (
      <ul className="navigator-list">
         {props.children}
      </ul>
   )
}
