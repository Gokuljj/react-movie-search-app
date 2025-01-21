import { RiMovie2AiLine } from "react-icons/ri";

const Footer = () => {
    return (
     <footer className="bg-gray-900 text-gray-200 p-4 border-t border-gray-600">
       <div className="container mx-auto text-center">
        <div className="flex justify-center gap-1 items-center mb-4">
          <p>&copy; {new Date().getFullYear()} </p>
          <h4 className="flex items-center  font-serif md:text-xl lg:text-xl text-purple-600">
          Cine<span className="text-blue-500 "><RiMovie2AiLine /></span>uest
          </h4>
          <p>. All rights reserved.</p>
        </div>
       
         <p>
           Built with <span className="text-purple-600">❤️</span> by Gokul Prasath.
         </p>
       </div>
     </footer>
    );
  };
  
  export default Footer;
  