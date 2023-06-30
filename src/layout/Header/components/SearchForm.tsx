import React, { useState, useEffect } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import './SearchForm.scss'
import { useGetCryptoSearchQuery } from '../../../redux/api/cryptoApi'
import { Link } from 'react-router-dom'
import millify from 'millify'

export const SearchForm = () => {
   const [open, setOpen] = useState<boolean>(false);
   const [query, setQuery] = useState<string>('')
   const { data: searchData, isFetching: isFetchSearch } = useGetCryptoSearchQuery(query);
   const searchItems = searchData?.data.coins;
   
   const handleSubmit = (event) => {
      event.preventDefault();
      const search = event.target.search.value;
      setQuery(search);
      setOpen(true);
   }

   useEffect(() => {

      const handler = (event: MouseEvent) => {
         if (event.target) {
            setOpen(false);
         }
      }

      document.addEventListener("mousedown", handler);
   });

   return (
      <div className="search-form">
         <form 
            action=""
            className="search-form__box"
            onSubmit={handleSubmit}   
         >
               
            <UilSearch className="search-form__image" />
   
            <input 
               className="search-form__input" 
               type="text"
               name="search"
               placeholder="Enter crypto..."    
            />
   
            <button 
               className="search-form__button"
               type="submit"
            >
               Search
            </button>
         </form>

         { 
         open 
         && 
         <ul className="search-form__items">
            {
               searchItems.map((searchItem: any) => (
                  <Link 
                     className="search-form__item" 
                     key={searchItem.uuid}
                     to={`/crypto/${searchItem.uuid}`}
                     
                  >
                     <img src={searchItem.iconUrl} alt="" className="search-form__item-icon" />
                     <span className="search-form__item-name">
                        {searchItem.name}
                     </span>
                     <span className="search-form__item-price">
                        {millify(searchItem.price)}
                     </span>
                  </Link>
               ))
            }
         </ul>
         
         }
      </div>
   )
}
