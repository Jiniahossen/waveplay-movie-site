
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Watching.css';

// import required modules
import { Pagination ,Navigation,Mousewheel, Keyboard} from 'swiper/modules';
import { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';

const Watching = () => {
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
        <div className='mt-10 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-roboto mb-6 font-medium'>Continue Watching</h1>
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

export default Watching;