'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav
                className={`font-bitter py-4 fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
                    isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
                }`}
            >
                <div className='flex mx-auto items-center sm:justify-around justify-between px-2 sm:px-0'>
                    <Link href="/" passHref className="text-xl font-bold">
                        GoldenKey
                    </Link>
                    <ul className='flex space-x-2 sm:space-x-4 lg:space-x-8'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>Rooms</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
