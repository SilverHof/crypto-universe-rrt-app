import './Pagination.scss'


export const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {

   let pages: (number)[] = [];

   for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
      pages.push(index);
   }

   const previousPage = () => {
      setCurrentPage(previousState => previousState - 1)
   }

   const nextPage = () => {
      setCurrentPage(previousState => previousState + 1)
   }


   return (
      <li className="pagination">
         <button 
            className={currentPage == 1 ? `pagination__previous-button_disable` : `pagination__previous-button`}
            onClick={previousPage}
         >
            Previous
         </button>
         {
            pages.map((page, index) => (
               <button
                  key={index}
                  // className="pagination__page-button"
                  className={page == currentPage ? `pagination__page-button_active` : `pagination__page-button`}
                  onClick={() => setCurrentPage(page)}
               >
                  {page}
               </button>
            ))
         }
         <button 
            
            className={(currentPage == pages.length) ? `pagination__next-button_disable` : `pagination__next-button`}
            onClick={nextPage}
         >
            Next
         </button>
      </li>
   )
}
