import { FaRegHeart } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { PiShareNetworkFill } from "react-icons/pi";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Details = () => {
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div className="h-full flex">
            <div className="w-2/3 h-full">
                <iframe
                    className="h-[90vh] w-full "
                    src="https://www.youtube.com/embed/YBVI6yzLxkg"
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="w-1/3 font-roboto">
                <div className="ps-6">
                    {/* Title */}
                    <h1 className="text-3xl">Mr.Been</h1>
                    {/* Dates */}
                    <h1 className="text-sm">October 24, 2002</h1>
                    {/* Tags */}
                    <div className="flex gap-4 mt-3 text-sm">
                        <h1>American</h1>
                        <h1>Cartoon</h1>
                        <h1>Comedy</h1>
                    </div>
                    {/* Link icons */}
                    <div className="mt-6 flex gap-6 justify-around items-center">
                        <div>
                            <button className="flex-col items-center justify-center">
                                <span className="flex-col items-center justify-center text-center">
                                    <FaRegHeart className="text-2xl mb-1 ml-4" />
                                    <h1 className="text-sm">Favorite</h1>
                                </span>
                            </button>
                        </div>
                        <div>
                            <button className="flex-col items-center justify-center">
                                <span className="flex-col items-center justify-center text-center">
                                    <PiShareNetworkFill className="text-2xl mb-1 ml-4" />
                                    <h1 className="text-sm">Share</h1>
                                </span>
                            </button>
                        </div>
                        <div>
                            <button className="flex-col items-center justify-center">
                                <span className="flex-col items-center justify-center text-center">
                                    <FaCloudDownloadAlt className="text-2xl mb-1  ml-4" />
                                    <h1 className="text-sm">Download</h1>
                                </span>
                            </button>
                        </div>
                        <div>
                            <button className="flex-col items-center justify-center">
                                <span className="flex-col items-center justify-center text-center">
                                    <FaCircleExclamation className="text-2xl mb-1 ml-4" />
                                    <h1 className="text-sm">Report</h1>
                                </span>
                            </button>
                        </div>


                    </div>
                    {/* Description */}
                    <div className="mt-6">
                        <h1 className="text-xs mb-4">Pop ads only have frequency of 1 pop per 1 hour.</h1>

                        <div id="accordion-collapse" className="shadow-md rounded-md" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button type="button" className="flex font-roboto text-sm items-center justify-between w-full p-3 font-medium rtl:text-right text-black border shadow-t-md border-gray-200 rounded-t-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="" aria-controls="accordion-collapse-body-1">
                                    <span>Description</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Episodes */}
                    <div className="mt-6">
                        <h1 className="text-lg font-medium">Episodes</h1>
                        <h1 className="text-sm">Total 13</h1>
                        <div className="mt-4 flex gap-4 flex-wrap">
                            <button className="px-6 py-1 rounded-sm bg-gray-600 text-white">
                                1
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                2
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                3
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                4
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                5
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                6
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                7
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                8
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                9
                            </button>
                            <button className="px-6 py-1 rounded-sm cursor-pointer bg-gray-600 text-white">
                                10
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Details;
