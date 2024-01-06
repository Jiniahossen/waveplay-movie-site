

const Footer = () => {
    return (
        <div className="w-full ">


            <footer className="bg-pink-600 rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full  p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm flex text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">
                        <h1 className="text-white">WavePlay™</h1></a>. All Rights Reserved.
                    </span>
                    <div className="w-20">
                        <img src="https://i.ibb.co/JpNtYCC/Google-Store.png" className="w-full" alt="" />
                    </div>
                    
                </div>

            </footer>

        </div>
    );
};

export default Footer;