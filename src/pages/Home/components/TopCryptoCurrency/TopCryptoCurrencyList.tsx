import React from 'react'
import { TopCryptoCurrencyItem } from './TopCryptoCurrencyItem'
import './TopCryptoCurrencyList.scss'


export const TopCryptocurrencyList = ({ items }) => {
   return (
      <div className="top-cryptocurrency-list">

         <div className="top-cryptocurrency-list__title-box">
            <h2 className="top-cryptocurrency-list__title-text">
               Top 25 Cryptocurrencies
            </h2>
            <div className="top-cryptocurrency-list__title-decor">
      
            </div>
         </div>

         <ul className="top-cryptocurrency-list__items">
            {
               items?.map((item: any) => (
                  <TopCryptoCurrencyItem 
                     key={item.uuid}
                     to={`/crypto/${item.uuid}`}

                     shortname={item.symbol}
                     fullname={item.name}
                     iconUrl={item.iconUrl}
                     rank={item.rank}

                     price={item.price}
                     change={item.change}
                     marketcap={item.marketCap}
                     website={item.coinrankingUrl}
                  />
               ))
            }
         </ul>
         
      </div>
   )
}
