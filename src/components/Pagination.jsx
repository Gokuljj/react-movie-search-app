import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1); // Decrease page number
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1); // Increase page number
      }
    };
  
    return (
     <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
       {/* Previous Button */}
       <button
         onClick={handlePrev}
         disabled={currentPage === 1} // Disable on first page
         className={`px-4 py-2 text-gray-200 rounded-md w-full sm:w-auto ${
           currentPage === 1 ? "bg-gray-600 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out"
         }`}
       >
         <span className="flex items-center">
           <FiChevronsLeft className="text-lg mr-2" />
           Previous
         </span>
       </button>
     
       {/* Page Info */}
       <span className="text-center text-gray-400">
         Page {currentPage} of {totalPages}
       </span>
     
       {/* Next Button */}
       <button
         onClick={handleNext}
         disabled={currentPage === totalPages} // Disable on last page
         className={`px-4 py-2 text-gray-200 rounded-md w-full sm:w-auto ${
           currentPage === totalPages
             ? "bg-gray-600 cursor-not-allowed"
             : "bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out"
         }`}
       >
         <span className="flex items-center">
           Next
           <FiChevronsRight className="text-lg ml-2" />
         </span>
       </button>
     </div>
    );
  };
  
  export default Pagination;
  