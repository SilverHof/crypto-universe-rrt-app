import React from 'react'
import HTMLReactParser from 'html-react-parser';
import './CryptoContent.scss'
import millify from 'millify';

export const CryptoContent = ({ details }) => {

   
   return (
      <div className="content">
         <img src={details.iconUrl} alt="" className="content__icon" />
         <h2 className="content__name">
            {details.name}
         </h2>
         <p className="content__description">
            {HTMLReactParser(details.description)}
         </p>
         <span className="content__price">
            Price: <span>${millify(details.price)}</span>
         </span>
         <span className="content__market-cap">
            Market Cap: <span>${millify(details.marketCap)}</span>
         </span>
         <div className="content__rank">
            Rank: <span>{details.rank}</span>
         </div>
      </div>
   )
}
