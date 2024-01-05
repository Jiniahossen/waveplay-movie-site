import { Link, Outlet } from "react-router-dom";

const Explore = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex gap-1 items-center font-roboto mt-10 mb-6">
                <Link to={'/explore'}>
                    <button type="button" className="py-1 rounded-2xl px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-pink-600 border border-gray-200 hover:bg-white hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">All</button>
                </Link>
                <Link to={'/explore/popular'}>
                    <button type="button" className="py-1 rounded-2xl px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-pink-600 border border-gray-200 hover:bg-white hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Popular</button>
                </Link>
                <Link to={'/explore/up-coming'}>
                    <button type="button" className="py-1 rounded-2xl px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-pink-600 border border-gray-200 hover:bg-white hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Up coming</button>
                </Link>
                <Link to={'/explore/top-rated'}>
                    <button type="button" className="py-1 rounded-2xl px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-pink-600 border border-gray-200 hover:bg-white hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Top Rated</button>
                </Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Explore;