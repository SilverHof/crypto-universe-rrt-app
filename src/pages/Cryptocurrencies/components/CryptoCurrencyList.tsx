import React, { useEffect, useState } from 'react'
import { Pagination } from '../../../components/Paginatation/Pagination'
import { CryptoCurrencyItem } from './CryptoCurrencyItem'
import './CryptoCurrencyList.scss'

export const CryptoCurrencyList = () => {

   const url: string = `https://coinranking1.p.rapidapi.com/coins?limit=500`;

   const [cryptoData, setCryptoData] = useState([]);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [itemsPerPage, setItemsPerPage] = useState<number>(50);

   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;


   const getCryptoData = async (url: string) => {
      try {
         const response = await fetch(url);
         const parsedResponse = await response.json();
         setCryptoData(parsedResponse.data.coins);
         console.log(parsedResponse);
         
      } catch (error) {
         console.log(error);
      }
   }
   

   useEffect(() => {
      getCryptoData(url);      
   }, [])
   
   const currentItems = cryptoData?.slice(firstItemIndex, lastItemIndex);


   return (
      <ul className="cryptocurrency-list">
         {
            currentItems?.map((currentItem: any) => (
               <CryptoCurrencyItem 
                  key={currentItem.uuid}
                  to={`/crypto/${currentItem.uuid}`}
                  
                  rank={currentItem.rank}
                  iconUrl={currentItem.iconUrl}
                  shortname={currentItem.symbol}
                  fullname={currentItem.name}
                  price={currentItem.price}
                  change={currentItem.change}
                  marketcap={currentItem.marketCap}
               />
            ))
         }
         <Pagination 
            totalItems={cryptoData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
         />
      </ul>
   )
}
