
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Watching/Watching.css'

// import required modules
import { Pagination ,Navigation,Mousewheel, Keyboard} from 'swiper/modules';
import { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import { IoIosArrowForward } from 'react-icons/io';

const Kdrama = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then((res) => res.json())
            .then((data) => {
                
                setMovie(data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])
    
    return (
        <div className='mt-6 max-w-7xl mx-auto '>
            <button className='p-2 rounded-md bg-none mb-4 hover:bg-[#767676] hover:text-white'>
                <div className="flex gap-2 items-center">
                    <h1 className='text-xl items-center font-roboto font-medium'>Top Kdrama</h1>
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
          movie?.map(movie=>
            <SwiperSlide key={movie.id}><Movies movie={movie} > </Movies> </SwiperSlide>)  
        }
       
       
      </Swiper>
    </>
        </div>
    );
};

export default Kdrama;