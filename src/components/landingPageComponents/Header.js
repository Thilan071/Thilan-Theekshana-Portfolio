import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
    const navigate = useNavigate();

    // Function to navigate to the home page
    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <nav className="font-comfortaa bg-secondary-100 text-primary_1 sm:bg-primary_1 sm:text-black">
            <div className="container mx-auto px-4 text-xs font-thin sm:justify-between sm:px-4 sm:py-4 sm:text-sm md:text-base md:w-26 lg:text-lg lg:py-6 lg:font-medium xl:text-2xl xl:py-10 xl:px-16 screen3xl:text-4xl">
                <div className="flex justify-between items-center py-5">
                    <button 
                        className="text-xl font-bold flex-1 sm:hidden cursor-pointer"
                        onClick={handleNavigate}
                    >
                        Thilan Theekshana
                    </button>

                    {/* Left side links for larger screens */}
                    <div className="hidden sm:flex flex-1 justify-start items-center">
                        <a 
                            href="#about" 
                            className="py-2 px-3 md:min-w-26 xl:px-8 2xl:px-12"
                        >
                            About me
                        </a>
                        <a 
                            href="#skills" 
                            className="py-2 px-3 md:min-w-26 xl:px-8 2xl:px-12"
                        >
                            Skills
                        </a>
                    </div>
                    
                    
                    <button 
                        className="nav-buttons font-bold sm:text-2xl sm:w-40 sm:mx-16 md:text-3xl md:w-64 md:px-10 lg:text-4xl lg:w-96 lg:px-16 xl:text-5xl xl:w-96 xl:px-14 font-fra screen3xl:text-7xl screen3xl:w-w108 cursor-pointer"
                        onClick={handleNavigate}
                    >
                        Thilan Theekshana
                    </button>

                    {/* Right side links for larger screens */}
                    <div className="hidden sm:flex flex-1 justify-end items-center">
                        <a 
                            href="#education" 
                            className="py-2 px-3 md:min-w-26 xl:px-8 2xl:px-12"
                        >
                            Education
                        </a>
                        <a 
                            href="#portfolio" 
                            className="py-2 px-3 md:min-w-26 xl:px-8 2xl:px-12"
                        >
                            Portfolio
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="ml-auto"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path d="M4 6h16M4 12h16m-4 6h4"></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu, expanded/collapsed based on 'isOpen' state */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <a 
                    href="#about" 
                    className="block py-2 px-4 text-sm"
                >
                    About me
                </a>
                <a 
                    href="#skills" 
                    className="block py-2 px-4 text-sm"
                >
                    Skills
                </a>
                <a 
                    href="#education" 
                    className="block py-2 px-4 text-sm"
                >
                    Education
                </a>
                <a 
                    href="#portfolio" 
                    className="block py-2 px-4 text-sm"
                >
                    Portfolio
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
