import React from 'react'
import './CryptoHeader.scss'

export const CryptoHeader = () => {
   return (
      <div className="crypto-header">
         <div className="crypto-header__rank">
            #
         </div>
         <div className="crypto-header__currency">
            Currency
         </div>
         <div className="crypto-header__price">
            Price
         </div>
         <div className="crypto-header__change">
            24h Changes
         </div>
         <div className="crypto-header__market-cap">
            Market Cap
         </div>
      </div>
   )
}
