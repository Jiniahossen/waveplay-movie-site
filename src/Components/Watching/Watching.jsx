import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Watching.css';
// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import Movies from '../Movies/Movies';
import useAllDramas from '../../hooks/useAllDramas';

const Watching = () => {

  const [dramas] = useAllDramas()
  return (
    <div className='mt-10 max-w-7xl mx-auto '>
      <h1 className='text-2xl font-roboto mb-4 font-medium'>Continue Watching</h1>
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

export default Watching;