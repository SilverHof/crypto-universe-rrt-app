import { motion } from 'framer-motion';
import { useState } from 'react';
import { useGetNewsByTopicQuery } from '../../redux/api/cryptoNewsApi';

import { NewsList } from '../News/components/NewsList';
import './NewsCryptoPage.scss'

export const NewsCryptoPage = () => {
   
   const { data, isFetching } = useGetNewsByTopicQuery(`crypto`);
   const newsItems = data?.articles.slice(0, 60);
   

   return (
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         <section className="news-crypto-page">

            <div className="news-crypto-page__title-box">              
               <h2 className="news-crypto-page__title-text">
                  Last Crypto News
               </h2>
               <div className="news-crypto-page__title-decor">
      
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
