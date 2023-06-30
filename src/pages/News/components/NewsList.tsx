import { useState } from 'react';
import { Pagination } from '../../../components/Paginatation/Pagination';
import { NewsItem } from './NewsItem';
import './NewsList.scss'

export const NewsList = ({ newsItems, isFetching }) => {

   const [cryptoData, setCryptoData] = useState([]);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [itemsPerPage, setItemsPerPage] = useState<number>(10);

   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;

   const currentItems = newsItems?.slice(firstItemIndex, lastItemIndex);

   return (
      <>
         <ul className="news-list">
            {
               !isFetching && currentItems?.map((newsItem: any) => (
                  <NewsItem 
                     key={newsItem.publishedAt}
   
                     urlToImage={newsItem.urlToImage}
                     author={newsItem.author}
                     publishedAt={newsItem.publishedAt}
                     title={newsItem.title}
                     description={newsItem.description}
                     website={newsItem.url}
   
                  />
               ))
            }
         </ul>
   
         {
            !isFetching 
            && 
            <Pagination 
               totalItems={newsItems.length}
               itemsPerPage={itemsPerPage}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
            />
         }
      </>
   )
}
