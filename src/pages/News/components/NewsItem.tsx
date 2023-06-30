import React from 'react'
import { UilArrowCircleRight } from '@iconscout/react-unicons'
import './NewsItem.scss'


export const NewsItem = ({ urlToImage, author, publishedAt, title, description, website }) => {

   const date = publishedAt;
   const formatDate = date.replace('T', ' ');
   const formatTime = formatDate.replace('Z', ' ');

   return (
      <li className="news-item">
         <div className="news-item__image-box">
            <img 
               src={urlToImage} 
               alt="news" 
               className="news-item__image" 
            />
         </div>
         <div className="news-item__content">
            <span className="news-item__publish">
               {formatTime}
            </span>
            <h2 className="news-item__title">
               {title}
            </h2>
            <p className="news-item__description">
               {description}
            </p>
            <a 
               href={website} 
               className="news-item__button"
            >
               <span className="news-item__button-text">
                  Source
               </span>
               <UilArrowCircleRight 
                  className="news-item__button-icon"
               />
            </a>
         </div>
      </li>
   )
}
