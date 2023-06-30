import { motion } from 'framer-motion';
import { useState } from 'react';
import { useGetNewsByTopicQuery } from '../../redux/api/cryptoNewsApi';

import { NewsList } from '../News/components/NewsList';
import './NewsTokenPage.scss'

export const NewsTokenPage = () => {

   const { data, isFetching } = useGetNewsByTopicQuery(`token`);
   const newsItems = data?.articles.slice(0, 200);


   return (
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         <section className="news-token-page">

            <div className="news-token-page__title-box">      
               <h2 className="news-token-page__title-text">
                  Last Token News
               </h2>
               <div className="news-token-page__title-decor">
      
               </div>     
            </div>

            <NewsList
               newsItems={newsItems}
               isFetching={isFetching}
            />
            
         </section>
      </motion.main>
   )
}
