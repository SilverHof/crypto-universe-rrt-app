import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from '../../redux/api/cryptoApi';

import { CryptoChart } from './components/CryptoChart';
import { CryptoContent } from './components/CryptoContent';
import './CryptoDetails.scss'

export const CryptoDetails = () => {

   const { cryptoId } = useParams();

   const { data: cryptoDetails, isFetching: isFetchDetails } = useGetCryptoDetailsQuery(cryptoId);
   const details = cryptoDetails?.data.coin;
   

   return (
      
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         <section className="crypto-details">
            <div className="crypto-details__container">
               <div className="crypto-details__inner">
                  { !isFetchDetails && <CryptoContent  details={details} /> }
                  <CryptoChart cryptoId={cryptoId}/>
               </div>
            </div>
         </section>
      </motion.main>
   )
}
