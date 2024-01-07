
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Watching/Watching.css';

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import Movies from '../Movies/Movies';
import { IoIosArrowForward } from 'react-icons/io';
import useAllDramas from '../../hooks/useAllDramas';

const LatestUpdate = () => {
    const [dramas] = useAllDramas()

    return (
        <div className='mt-6 max-w-7xl mx-auto '>
            <button className='p-2 rounded-md bg-none mb-4 hover:bg-[#767676] hover:text-white'>
                <div className="flex gap-2 items-center">
                    <h1 className='text-xl items-center font-roboto font-medium'>Latest Update</h1>
                    <IoIosArrowForward className="text-2xl"></IoIosArrowForward>
                </div>
            </button>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >

                    {
                        dramas?.map(movie =>
                            <SwiperSlide key={movie._id}><Movies movie={movie} > </Movies> </SwiperSlide>)
                    }


                </Swiper>
            </>
        </div>
    );
};

export default LatestUpdate;