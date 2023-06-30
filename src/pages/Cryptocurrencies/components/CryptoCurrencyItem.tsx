import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import './CryptoCurrencyItem.scss'


export const CryptoCurrencyItem = ({ to, rank, iconUrl, shortname, fullname, price, change, marketcap }) => {
   return (
      <Link to={to} className="cryptocurrency-item">
         <div className="cryptocurrency-item__rank">
            {rank}
         </div>
         <div className="cryptocurrency-item__currency">
            <img 
               src={iconUrl} 
               alt="icon" 
               className="cryptocurrency-item__currency-icon" 
            />
            <span className="cryptocurrency-item__currency-short-name">
               {shortname}
            </span>
            <span className="cryptocurrency-item__currency-full-name">
               {fullname}
            </span>
         </div>
         <div className="cryptocurrency-item__price">
            ${millify(price)}
         </div>
         <div className={change[0]==='-' ? `cryptocurrency-item__change_red` : `cryptocurrency-item__change`}>
            {change}%
         </div>
         <div className="cryptocurrency-item__market-cap">
            ${marketcap}
         </div>
         <button className="cryptocurrency-item__button">
            Trade
         </button>
      </Link>
  )
}
