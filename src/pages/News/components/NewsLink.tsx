import { Link } from 'react-router-dom'
import { UilAngleRightB } from '@iconscout/react-unicons'
import './NewsLink.scss'


export const NewsLink = ({ path, title, classname }) => {
   return (
      <Link to={path} className={`news-link ${classname}`} >
         <div className="news-link__content">
            <h2 className="news-link__title">
               {title}
            </h2>
            <div className="news-link__arrows">
               <UilAngleRightB className="news-link__arrow" />
               <UilAngleRightB className="news-link__arrow" />
               <UilAngleRightB className="news-link__arrow" />
            </div>
         </div>
      </Link>
   )
}
