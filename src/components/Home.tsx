


export default function Home(){



    return(
        <div className="p-8" id="home">
            <div className="flex justify-around items-center ">
                <div className="flex flex-col gap-6">
                    <h1 className="text-6xl text-white font-bold">Front-End <br /> Developer</h1>
                    <p className="text-white text-lg">Studying for specialist of web applications</p>
                    <p className="text-white text-lg">I can build responsive and interactive web applications.</p>
                    <div className="flex gap-4">
<button className="text-white border rounded-md px-4 py-2 border-green-500 bg-green-500 w-44">Contact Me</button>
                    <button className="text-white border rounded-md px-4 py-2 border-green-500 bg-green-500 w-44">CV</button>
                    </div>
                    
                </div>
                <div>
                    <img src="image.jpg" className="bg-[#0e141e] border-[#0e141e] rounded-full w-62 h-62 "/>
                </div>
            </div>
        </div>
    )
}