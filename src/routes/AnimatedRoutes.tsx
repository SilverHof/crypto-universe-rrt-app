import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { AnimatePresence } from 'framer-motion';
import { Cryptocurrencies } from '../pages/Cryptocurrencies/Cryptocurrencies';
import { News } from '../pages/News/News';
import { NewsNftPage } from '../pages/NewsCategoryPage/NewsNftPage';
import { NewsTokenPage } from '../pages/NewsCategoryPage/NewsTokenPage';
import { NewsCryptoPage } from '../pages/NewsCategoryPage/NewsCryptoPage';
import { CryptoDetails } from '../pages/CryptoDetails/CryptoDetails';



export const AnimatedRoutes = () => {

   const location = useLocation();

   return (
      <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout/>}> 
               <Route index element={<Home />} />
               <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
               <Route path="news" element={<News />} />
               <Route path="news-crypto" element={<NewsCryptoPage />} />
               <Route path="news-nft" element={<NewsNftPage />} />
               <Route path="news-token" element={<NewsTokenPage />} />
               <Route path="crypto/:cryptoId" element={<CryptoDetails />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </AnimatePresence>
   )
}
