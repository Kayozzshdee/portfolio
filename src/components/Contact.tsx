import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



export default function Contact(){



    return(
    <div id="contact" className="bg-[#0e141e] w-full flex flex-col gap-4 py-20">
        <h1 className="text-white text-2xl flex justify-center ">Contact me</h1>
        <div className="flex justify-center gap-4">
            <div><FaInstagramSquare size={32} color="white"/></div>
            <div><FaFacebook size={32} color="white"/></div>
        </div>
        
    </div>
    
    )
}