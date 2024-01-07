import { BiLoaderCircle } from "react-icons/bi";
import { RiPaintFill } from "react-icons/ri";

const Theme = () => {
    return (
        <div>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex gap-1 text-base items-center">

                <RiPaintFill className="text-2xl"></RiPaintFill>
                Theme

            </button>
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                        <div className="flex gap-2 px-2 w-full items-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <BiLoaderCircle className="text-xl text-pink-600"></BiLoaderCircle>
                            <h1><span className="text-black">Dark</span> & <span className="text-pink-600">Pink</span></h1>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 px-2 w-full items-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <BiLoaderCircle className="text-xl text-purple-600"></BiLoaderCircle>
                            <h1><span className="text-black">Dark</span> & <span className="text-purple-600">Pink</span></h1>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-2 px-2 w-full items-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <BiLoaderCircle className="text-xl"></BiLoaderCircle>
                            <h1>Default</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Theme;