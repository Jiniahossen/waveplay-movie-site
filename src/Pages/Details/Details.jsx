import { FaRegHeart } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { PiShareNetworkFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import { useLoaderData, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Details = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const filterData = data.find(data => data._id === id);

    // State to track selected episode index
    const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState(0);
    // State to force re-render of ReactPlayer by changing key
    const [playerKey, setPlayerKey] = useState(0);

    // Function to handle episode button click
    const handleEpisodeClick = (index) => {
        setSelectedEpisodeIndex(index);
        setPlayerKey(playerKey + 1);

    };

    console.log(filterData.episodes[selectedEpisodeIndex]);
    //flowbite
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div className="h-full flex flex-col lg:flex-row ">
            {/* video */}
            <div className="w-full lg:w-2/3 h-full">
                <ReactPlayer
                    key={playerKey}
                    url={filterData.episodes[selectedEpisodeIndex]}
                    width="100%"
                    height="90vh"
                    controls={true}
                    reset={true}
                />
            </div>
            {/* details */}
            <div className="w-full lg:w-1/3 font-roboto">
                <div className="md:ps-2 lg:ps-6 pt-6">
                    {/* Title */}
                    <h1 className="text-3xl">{filterData.title}</h1>
                    {/* Dates */}
                    <h1 className="text-sm">{filterData.release_date}</h1>
                    {/* Tags */}
                    <div className="flex gap-4 mt-4 text-sm">
                        {filterData.tags &&
                            filterData.tags.map((tag, index) => (
                                <span key={index} className=" rounded-md">
                                    {tag}
                                </span>
                            ))}
                    </div>
                    {/* Link icons */}
                    <div className="mt-6 md:mt-14 flex gap-6 justify-around items-center">
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
                    <div className="mt-6 md:mt-14">
                        <h1 className="text-xs mb-4">Pop ads only have frequency of 1 pop per 1 hour.</h1>

                        <div id="accordion-collapse" className="shadow-md rounded-md" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button type="button" className="flex font-roboto text-sm items-center justify-between w-full p-3 font-medium rtl:text-right text-black border shadow-t-md border-gray-200 rounded-t-md  gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="" aria-controls="accordion-collapse-body-1">
                                    <span>Description</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">{
                                        filterData.description
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Episodes */}

                    <div className="mt-6 mb-10 lg:mb-0 md:mt-20">
                        <h1 className="text-lg font-medium">Episodes</h1>
                        <h1 className="text-sm">Total {filterData.episodes?.length}</h1>
                        <div className="mt-4 flex gap-4 justify-around flex-wrap">
                            {filterData.episodes &&
                                filterData.episodes.map((episode, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 rounded-md border ${selectedEpisodeIndex === index
                                            ? "border-pink-600 bg-pink-600 text-white"
                                            : "border-gray-300 bg-gray-100 text-gray-700 hover:border-pink-400 hover:bg-blue-100 hover:text-pink-600"
                                            }`}
                                        onClick={() => handleEpisodeClick(index)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Details;
