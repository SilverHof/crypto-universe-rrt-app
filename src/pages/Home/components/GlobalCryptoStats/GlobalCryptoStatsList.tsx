import React from 'react'
import { GlobalCryptoStatsItem } from './GlobalCryptoStatsItem'
import './GlobalCryptoStatsList.scss'

export const GlobalCryptoStatsList = ({ items }) => {
   
   return (
      <div className="global-crypto-stats-list">
         <div className="global-crypto-stats-list__title-box">
            <h2 className="global-crypto-stats-list__title-text">
               Global Crypto Stats
            </h2>
            <div className="global-crypto-stats-list__title-decor">
   
            </div>
         </div>
         
         <ul className="global-crypto-stats-list__items">
            <GlobalCryptoStatsItem 
               text={`Total Cryptocurrencies`}
               value={items.total}
            />
            <GlobalCryptoStatsItem 
               text={`Total Exchanges`}
               value={items.totalExchanges}
            />
            <GlobalCryptoStatsItem 
               text={`Total Market Cap`}
               value={items.totalMarketCap}
            />
            <GlobalCryptoStatsItem 
               text={`Total 24h Volume`}
               value={items.total24hVolume}
            />
            <GlobalCryptoStatsItem 
               text={`Total Markets`}
               value={items.totalMarkets}
            />
         </ul>

      </div>
   )
}
