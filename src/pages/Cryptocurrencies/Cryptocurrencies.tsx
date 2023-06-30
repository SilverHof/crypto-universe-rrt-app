import { motion } from 'framer-motion'
import { CryptoCurrencyList } from './components/CryptoCurrencyList'
import { CryptoHeader } from './components/CryptoHeader'
import './Cryptocurrencies.scss'


export const Cryptocurrencies = () => {

   
   return (
      
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         <section className="cryptocurrencies">
            <div className="cryptocurrencies__container">
               <div className="cryptocurrencies__inner">


                  <div className="cryptocurrencies__title-box">
                     <h2 className="cryptocurrencies__title-text">
                        Cryptocurrencies prices
                     </h2>
                     <div className="cryptocurrencies__title-decor">

                     </div>
                  </div>

                  <div className="cryptocurrencies__table">
                     <CryptoHeader />
                     <CryptoCurrencyList />
                  </div>

               </div>
            </div>
         </section>
      </motion.main>
   )
}
