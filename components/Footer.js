

export default function Footer(){
    return(
        <footer>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1   gap-6 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-gray-300 p-4">
            <div className="m-4">
                <h1 className="text-2xl text-white font-bold">Royal HotSpot Cyber</h1>
                <p className="font-serif">Every big dream starts with a single step<br/> -and today is that step.Keep pushing, keep grinding ,<br/>
                 and remember success comes to those who never give up!</p>
            </div>
            <div className="flex flex-row items-center justify-evenly p-2">
                <div>
                    <h3 className="text-xl p-2 flex items-center justify-center text-gray-200">Pages</h3>
                <div className="m-4">
                    <ul className="text-sm">
                        <li><a href="./"className="hover:text-blue-600 ease-in-out duration-500">Home</a></li>
                        <li><a href="#services"className="hover:text-blue-600 ease-in-out duration-500">Services</a></li>
                        <li><a href="#products"className="hover:text-blue-600 ease-in-out duration-500">Products</a></li>
                    </ul>
                </div>
                </div>
                <div className="">
                    <h3 className="text-xl p-2 text-gray-200">Contacts</h3>
                    <div className="m-4">
                    <ul className="text-sm">
                        <li><a href="mailto:07264265"className="hover:text-blue-500 ease-in-out duration-500">07 26452 652</a></li>
                        <li><a href="mailto:hotspotcyber254@gmail.com"className="hover:text-blue-500 ease-in-out duration-500">hotspotcyber254@gma</a></li>
                        <li><a href=""className="hover:text-blue-500 ease-in-out duration-500">royalhotspotcyber{/*IG*/}</a></li>
                        <li><a href=""className="hover:text-blue-500 ease-in-out duration-500">hotspotcyber253{/*FaceBook*/}</a></li>
                    </ul>
                    </div>
                </div>

                <div className=" flex flex-col">
                    <h3 className="text-xl p-2 text-gray-200 flex items-center justify-center">Information</h3>
                     <div className="m-4">
                    <ul className="text-sm">
                        <li><a href="#contact"className="hover:text-blue-400 ease-in-out duration-500">About Us</a></li>
                        <li><a href="#"className="hover:text-blue-400 ease-in-out duration-500">Directions</a></li>
                    </ul>
                    </div>
                </div>


            </div>
        </div>
        <div className="text-center  text-white  p-8 flex flex-row w-full items-center justify-center bg-gradient-to-r from-gray-600
        via-gray-700 to-gray-800">
            <p className="text-xs">
                &copy; {new Date().getFullYear()} Royal HotSpot Cyber.All rights reserved.
            </p>
        </div>
        </footer>
    );
}