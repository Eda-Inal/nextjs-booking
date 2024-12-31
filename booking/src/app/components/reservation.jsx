'use client'
import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Reservation() {

    return (

        <>


            <div className='bg-white p-4 h-64 sm:h-40  md:h-24 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 place-items-center font-bitter'>
                <div className='relative w-full'>
                    <DatePicker
                        customInput={
                            <input
                                className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between text-black'
                                type="text"
                                placeholder='Arrival Date'
                            />
                        }
                        dateFormat="yyyy-MM-dd"
                        wrapperClassName="w-full"
                        placeholderText='Arrival Date'
                    />
                    <div className='absolute inset-y-0 right-3 flex items-center group'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                    </div>
                </div>


                <div className='relative w-full'>
                    <DatePicker
                        customInput={
                            <input
                                className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between text-black'
                                type="text"
                                placeholder='Departure Date'
                            />
                        }
                        dateFormat="yyyy-MM-dd"
                        wrapperClassName="w-full"
                        placeholderText='Departure Date'
                    />
                    <div className='absolute inset-y-0 right-3 flex items-center group'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                    </div>
                </div> <div className='relative w-full'>
                    <DatePicker
                        customInput={
                            <input
                                className='rounded-full bg-gray-100 w-full h-8 lg:h-10 outline-none text-md px-4 flex justify-between text-black'
                                type="text"
                                placeholder='Person'
                            />
                        }
                        dateFormat="yyyy-MM-dd"
                        wrapperClassName="w-full"
                        placeholderText='Person'
                    />
                    <div className='absolute inset-y-0 right-3 flex items-center group'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                </div>
                <button
                    className='rounded-full w-full h-10 sm:h-8 lg:h-10  text-white bg-gradient-to-r from-[#9c7365] to-[#50352c]  text-xl font-bitter shadow-md hover:shadow-lg transition-all'
                >
                    Find now
                </button>


            </div>
        </>

    )
}

export default Reservation