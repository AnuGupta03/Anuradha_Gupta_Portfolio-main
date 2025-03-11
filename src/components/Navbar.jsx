import { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id="Homeid" className="">
            <div className="shadow-md fixed top-0 z-50 w-full bg-sky-600 text-white hover:shadow-lg hover:shadow-[#ffcd67] transition-all duration-500">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Left - Brand Name */}
                        <h1 className="text-xl font-bold ml-0 xl:ml-24">Anuradha Gupta</h1>
                        
                        {/* Right - Menu Links */}
                        <div className="hidden md:flex space-x-10 mr-12 xl:mr-40">
                            <a href="#Homeid" className="font-black text-white  no-underline hover:underline">Home</a>
                            <a href="#Aboutid" className="font-black text-white no-underline hover:underline">About</a>
                            <a href="#projectdiv" className="font-black text-white no-underline hover:underline">Projects</a>
                            <a href="#contactid" className="font-black text-white no-underline hover:underline">Contact</a>
                        </div>

                        {/* Hamburger Menu for mobile */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu popup */}
                {isMenuOpen && (
                    <div className="fixed top-16 right-0 bg-opacity-50 z-40 flex justify-center items-center rounded-b-2xl overflow-hidden shadow-lg">
                        <div className="bg-sky-600 p-6 shadow-xl transition-all duration-500">
                            <ul className="flex flex-col items-center space-y-8">
                                <li>
                                    <a href="#Homeid" onClick={toggleMenu} className="text-white no-underline text-2xl">Home</a>
                                </li>
                                <li>
                                    <a href="#Aboutid" onClick={toggleMenu} className="text-white no-underline text-2xl">About</a>
                                </li>
                                <li>
                                    <a href="#projectdiv" onClick={toggleMenu} className="text-white no-underline text-2xl">Projects</a>
                                </li>
                                <li>
                                    <a href="#contactid" onClick={toggleMenu} className="text-white no-underline text-2xl">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
