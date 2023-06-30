import { motion } from 'framer-motion';
import { useGetNewsByTopicQuery } from '../../redux/api/cryptoNewsApi';
import { NewsList } from '../News/components/NewsList';
import './NewsNftPage.scss'

export const NewsNftPage = () => {

   const { data, isFetching } = useGetNewsByTopicQuery(`nft`);
   const newsItems = data?.articles.slice(0, 60);


   return (
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         <section className="news-nft-page">

            <div className="news-nft-page__title-box">      
               <h2 className="news-nft-page__title-text">
                  Last NFT News
               </h2>
               <div className="news-nft-page__title-decor">
      
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
