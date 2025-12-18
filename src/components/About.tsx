


export default function About() {   


    return(
        <div className="p-8 " id="about">
            <div>
                <div  className="flex flex-col gap-4">
                    <h1 className="text-4xl fond-bold flex justify-center text-white">About Me</h1>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center gap-4 w-1/3">
                            <h1 className="text-white text-3xl">School</h1>
                            <div className="flex justify-center items-center gap-10">
                                <div className="flex flex-col gap-2 text-white">
                                    <h1>Student of Mongol Koosen Technology College</h1>
                                    <p>4th year</p>
                                    <p>Name: Gan-Erdene</p>
                                </div>
                        
                                <img src="MK.png" alt="Mongol Koosen Technology College" className="w-64 h-56 border rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white text-3xl flex justify-center items-center">Usages</h1>
                            <div className="flex gap-3">
                                <img src="C.svg" alt=""  /><img src="CSS3-Logo.jpg" alt=""  className="w-40 h-40"/>
                                <img src="html.png" alt="" className="w-40 h-40"/><img src="js-logo.jpg" alt="" className="w-40 h-40"/>
                                <img src="Next.js" alt="" className="w-40 h-40"/><img src="Python-logo.png" alt="" className="w-40 h-40"/>
                                <img src="react-logo.png" alt="" className="w-40 h-40"/><img src="tailwindcss.webp" alt="" className="w-40 h-40"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}