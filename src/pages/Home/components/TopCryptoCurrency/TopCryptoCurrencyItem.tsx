import millify from 'millify'
import { UilArrowCircleRight } from '@iconscout/react-unicons'
import './TopCryptoCurrencyItem.scss'
import { Link } from 'react-router-dom'


export const TopCryptoCurrencyItem = ({ shortname, fullname, iconUrl, rank, price, change, marketcap, website, to }) => {

   return (
      <li className="top-cryptocurrency-item">
         <div className="top-cryptocurrency-item__header">
            <div className="top-cryptocurrency-item__title-box">
               <img 
                  src={iconUrl} 
                  alt="crypto" 
                  className="top-cryptocurrency-item__title-icon" 
               />
               <div className="top-cryptocurrency-item__title-name">
                  <span className="top-cryptocurrency-item__title-full-name">
                     {fullname}
                  </span>
                  <span className="top-cryptocurrency-item__title-short-name">
                     {shortname}
                  </span>
               </div>
            </div>
            <h2 className="top-cryptocurrency-item__rate">
               {rank}
            </h2>
         </div>
         <div className="top-cryptocurrency-item__content">
            <div className="top-cryptocurrency-item__text-box">
               <span className="top-cryptocurrency-item__text-name">
                  Price
               </span>
               <span className="top-cryptocurrency-item__text-value">
                  ${millify(price)}
               </span>
            </div>
            <div className="top-cryptocurrency-item__text-box">
               <span className="top-cryptocurrency-item__text-name">
                  24h Change  
               </span>
               <span 
               className={change[0]==='-' ? `top-cryptocurrency-item__text-value_red` : `top-cryptocurrency-item__text-value`}>
                  {millify(change)}%
               </span>
            </div>
            <div className="top-cryptocurrency-item__text-box">
               <span className="top-cryptocurrency-item__text-name">
                  Market 
               </span>
               <span className="top-cryptocurrency-item__text-value">
                  ${millify(marketcap)}
               </span>
            </div>
         </div>
         <Link to={to} className="top-cryptocurrency-item__explore-button">
            <span className="top-cryptocurrency-item__explore-button-text">
               Explore
            </span>
            <UilArrowCircleRight className="top-cryptocurrency-item__explore-button-icon" />
         </Link>
      </li>
   )
}

