import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";


const Questions = () => {
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div className="max-w-5xl mx-auto mt-10  font-roboto">
            <h1 className="text-2xl mb-10 text-center">
                Frequently Asked Questions
            </h1>

            <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-pink-600 dark:text-white">
                <h2 id="accordion-color-heading-1">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-pink-600 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="false" aria-controls="accordion-color-body-1">
                        <span>Video error?</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Try reload it  if it still not working send episode number and title or link to here . <br />
                            <p className="text-red-600 mt-1">(Note: Our webside and app test and debug using google chrome)</p></p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-2">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-pink-600 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                        <span>Substitle error?</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Send episode number and title or link to here

                        </p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-3">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-pink-600 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                        <span>Others error?</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
                    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Tell us whats your problem to here </p>

                    </div>
                </div>
            </div>

            {/* facebook button */}
            <div className="mt-20 max-w-6xl mx-auto flex justify-center">
                <button className="bg-blue-500 px-4 py-2 rounded-md border">
                    <span className="flex gap-2 items-center">
                        <FaFacebookF className="text-white text-xl"></FaFacebookF>
                        <h1 className="text-white text-lg"> Find us on Google</h1>
                    </span>
                </button>
            </div>

        </div>
    );
};

export default Questions;