import { RiMovie2AiLine } from "react-icons/ri";

const Header = () => {
    return (
   <header className="bg-gray-900 text-gray-200 p-4 md:p-6 lg:p-8 flex justify-center items-center border-b border-gray-600">
     <h1 className="flex items-center text-2xl font-serif md:text-3xl lg:text-4xl text-purple-600">
       Cine<span className="text-blue-500 "><RiMovie2AiLine /></span>uest
     </h1>
   </header>
    
    );
  };
  
  export default Header;
  