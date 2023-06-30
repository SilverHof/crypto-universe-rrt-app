import { motion } from 'framer-motion';
import { useGetCryptoQuery } from '../../redux/api/cryptoApi';
import { GlobalCryptoStatsList } from './components/GlobalCryptoStats/GlobalCryptoStatsList';
import { TopCryptocurrencyList } from './components/TopCryptoCurrency/TopCryptoCurrencyList';
import './Home.scss'

export const Home = () => {
   const { data, isFetching } = useGetCryptoQuery('');
   
   const globalCryptoStatsItems = data?.data.stats;
   const topCryptoCurrencyItems = data?.data.coins.slice(0,25);

   
   return (
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         <section className="home-page">
            <div className="home-page__container">
               <div className="home-page__inner">
                  <h2 className="home-page__main-title">
                     A trusted and secure bitcoin and crypto exchange. <hr />
                     <span>Get started with the easiest and most secure platform to buy, sell, trade, and earn cryptocurrencies.</span>
                  </h2>

                  {
                     !isFetching && <GlobalCryptoStatsList 
                     items={globalCryptoStatsItems}
                  />
                  }

                  {
                     !isFetching && <TopCryptocurrencyList 
                     items={topCryptoCurrencyItems}
                  />
                  }

               </div>
            </div>
         </section>
      </motion.main>
   )
}
