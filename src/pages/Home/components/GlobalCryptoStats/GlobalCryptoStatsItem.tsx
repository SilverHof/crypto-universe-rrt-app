import millify from 'millify'
import React from 'react'
import './GlobalCryptoStatsItem.scss'

export const GlobalCryptoStatsItem = ({ text, value }) => {
   return (
      <li className="global-crypto-stats-item">
         <h2 className="global-crypto-stats-item__text">
            {text}
         </h2>
         <span className="global-crypto-stats-item__value">
            {millify(value)}
         </span>
      </li>
   )
}
