import { useState } from "react";



export default function Nav(){

const navBar = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const [activelink, setActivelink] = useState("#home")
    return(
        <>
        <div className="flex justify-around w-full h-16 pt-4 text-white fixed top-0 left-0 bg-[#0e141e]">
            <h1 className="text-3xl">Ganaa</h1>
            <div className="flex gap-5 text-white">
                 {navBar.map((link, index) => (
            <a
              onClick={() => setActivelink(link.href)}
              key={index}
              href={link.href}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:h-[2px] after:left-0 after:w-0 
                hover:after:w-full after:bg-blue-500 after:transition-all  ${ activelink === link.href ? "after:w-full text-blue-900" : "hover:text-gray-600"}`}
            >
              {link.name}
            </a>
          ))}
            </div>
        </div>
        </>
    )
}