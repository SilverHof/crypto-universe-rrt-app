import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';
import { useGetNewsByTopicQuery } from '../../redux/api/cryptoNewsApi';

import { NewsItem } from './components/NewsItem';
import { NewsLink } from './components/NewsLink';
import './News.scss'


export const News = () => {

   const { data, isFetching } = useGetNewsByTopicQuery('cryptocurrencies')
   const newsForItemOne = data?.articles[10];
   const newsForItemTwo = data?.articles[20];
   const newsForItemThree = data?.articles[30];
   const newsForItemFour = data?.articles[40];


   return (
      
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         <section className="news">
            <div className="news__container">
               <div className="news__inner">

                  <div className="news__title-box">
                     
                     <h2 className="news__title-text">
                        Last News
                     </h2>
                     <div className="news__title-decor">
      
                     </div>

                     
                     
                  </div>

                  {
                     !isFetching && <NewsItem 
   
                     urlToImage={newsForItemOne.urlToImage}
                     author={newsForItemOne.author}
                     publishedAt={newsForItemOne.publishedAt}
                     title={newsForItemOne.title}
                     description={newsForItemOne.description}
                     website={newsForItemOne.url}
   
                     />
                  }

                  <ul className="news__categories">
                     <NewsLink 
                        path={'/news-crypto'}
                        title={'Cryptos News'}
                        classname={'news-link_red'}
                     />
                     <NewsLink 
                        path={'/news-nft'}
                        title={'NFTs News'}
                        classname={'news-link_green'}
                     />
                     <NewsLink 
                        path={'/news-token'}
                        title={'Tokens News'}
                        classname={'news-link_yellow'}
                     /> 
                  </ul>

                  {
                     !isFetching && <NewsItem 
   
                     urlToImage={newsForItemTwo.urlToImage}
                     author={newsForItemTwo.author}
                     publishedAt={newsForItemTwo.publishedAt}
                     title={newsForItemTwo.title}
                     description={newsForItemTwo.description}
                     website={newsForItemTwo.url}
   
                     />
                  }

                  {
                     !isFetching && <NewsItem 
   
                     urlToImage={newsForItemThree.urlToImage}
                     author={newsForItemThree.author}
                     publishedAt={newsForItemThree.publishedAt}
                     title={newsForItemThree.title}
                     description={newsForItemThree.description}
                     website={newsForItemThree.url}
   
                     />
                  }

                  {
                     !isFetching && <NewsItem 
   
                     urlToImage={newsForItemFour.urlToImage}
                     author={newsForItemFour.author}
                     publishedAt={newsForItemFour.publishedAt}
                     title={newsForItemFour.title}
                     description={newsForItemFour.description}
                     website={newsForItemFour.url}
   
                     />
                  }

               </div>
            </div>
         </section>
      </motion.main>
   )
}
