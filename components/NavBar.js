'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar(){

    const [isMenuOpen, setIsMenuOpen]= useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(

    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-blue-800 bg-opacity-50 backdrop-blur-sm p-4">
        <div className="flex flex-row items-center justify-between">
        <div className="text-white order-1 flex flex-row items-center justify-around">
            <div>
                <Image src="/logo.jpg" alt="Royal HotSpot Cyber"width={45} height={45} className="rounded-full "/>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center m-1">
                <h1 className="font-bold md:text-lg text-xs">
                    Royal HotSpot Cyber
                </h1>
                <p className="text-xs">Your hustle, Our support</p>
            </div>
        </div>

        {/*Hamburger Menu*/}
        <div className="order-3 md:hidden relative">
            <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggele Menu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
        </div>

        <div className="order-2 flex-1 mx-4">
            <input 
                type="search" 
                placeholder="Passport applic..." 
                aria-label="Search"
                className="border border-gray-700 rounded-full w-full p-2 text-white"
            />
        </div>

        <div className={`md:order-3  md:left-auto absolute md:relative right-0 top-full md:right-auto
                          w-48 md:top-0 text-sm md:w-auto ${isMenuOpen ? 'block':'hidden'} md:block md:bg-blue-800 bg-gray-800 m-1 w-min rounded-lg p-3`}>
            <ul className="flex md:flex-row flex-col gap-2 text-white font-semibold">
                <li className="p-2 hover:text-gray-400 transition-colors duration-500">
                    <Link href="/"className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    Home
                    </Link>
                </li>
                <li className="p-2 hover:text-gray-400 transition-colors duration-500">
                    <Link href="#services" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                        <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                        <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                    </svg>
                    Services
                    </Link>
                </li>
                <li className="p-2 hover:text-gray-400 transition-colors duration-500">
                    <Link href="#products"className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    Products
                    </Link>
                </li>
                
                <li className="p-2 hover:text-gray-400 transition-colors duration-500">
                    <Link href="#contact"className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                    Contacts
                    </Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    );
}