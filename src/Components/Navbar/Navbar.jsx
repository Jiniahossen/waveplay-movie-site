// import logo from '../../assets/2564674-removebg-preview1.png'

import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { RiPaintFill } from "react-icons/ri";
import { MdOutlineChat } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Navbar = () => {
    useEffect(() => {
        initFlowbite();
    }, []);
    return (
        <div className="font-roboto">
            <nav className="bg-white border-gray-200 md:shadow-md md:h-20 items-center dark:bg-gray-900 dark:border-gray-700">
                <div className=" w-full lg:px-8 flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://i.ibb.co/Z8JmDyQ/2564674-removebg-preview1.png" className="h-14" alt="Flowbite Logo" />

                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to={'/'} className="flex gap-1 text-base items-center">
                                    <GoHome className="text-2xl"></GoHome>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={'/faq'} className="flex gap-1 text-base items-center">
                                    <IoMdChatboxes className="text-2xl"></IoMdChatboxes>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className="flex gap-1 text-base items-center">
                                    <MdOutlineChat className="text-2xl"></MdOutlineChat>
                                    Request Drama
                                </Link>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="">
                                    <Link to={'/'} className="flex gap-1 text-base items-center">
                                        <RiPaintFill className="text-2xl"></RiPaintFill>
                                        Theme
                                    </Link>
                                </button>
                                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to={'/explore'} className="flex gap-1 text-base items-center">
                                    <PiVideoLight className="text-2xl"></PiVideoLight>
                                    Explore
                                </Link>
                            </li>
                            <li>
                                <Link className="flex gap-1 text-base items-center">
                                    <IoSearchOutline className="text-2xl"></IoSearchOutline>
                                    Search
                                </Link>
                            </li>
                            <li>
                                <button className="border px-4 py-1 rounded-sm " id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarr">
                                    <Link className="flex gap-1 text-base items-center">
                                        <FaUserCircle className="text-2xl"></FaUserCircle>
                                        Sign in
                                    </Link>
                                </button>
                                <div id="dropdownNavbarr" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link className="flex py-2 pl-2 gap-1 text-base items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                <FcGoogle className="text-2xl"></FcGoogle>
                                                Google
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="flex py-2 pl-2 gap-1 text-base items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                <FaGithub className="text-2xl"></FaGithub>
                                                GitHub
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="flex py-2 pl-2 gap-1 text-base items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                <FaSquareFacebook className="text-2xl"></FaSquareFacebook>
                                                Facebook
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="flex py-2 pl-2 gap-1 text-base items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                <MdOutlineAlternateEmail className="text-2xl"></MdOutlineAlternateEmail>
                                                Email
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;