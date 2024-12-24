'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav
                className={`font-bitter py-4 fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
                    isScrolled ? 'bg-primary text-white shadow-md' : 'bg-black/50 text-white'
                }`}
            >
                <div className="flex mx-auto items-center sm:justify-around justify-between px-2 sm:px-0">
                    <Link href="/" passHref className="text-xl font-bold">
                        GoldenKey
                    </Link>
                    <div className="sm:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <ul className="hidden sm:flex space-x-2 sm:space-x-4 lg:space-x-8 text-md">
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#rooms">Rooms</a>
                        </li>
                        <li>
                            <a href="#restaurant">Restaurant</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                    </ul>
                </div>
                {isOpen && (
                    <div className="sm:hidden text-white py-4">
                        <ul className="flex flex-col items-end space-y-4 px-4">
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#rooms">Rooms</a>
                            </li>
                            <li>
                                <a href="#restaurant">Restaurant</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
