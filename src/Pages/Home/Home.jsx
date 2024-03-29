import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"
import { FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Watching from "../../Components/Watching/Watching";
import LatestUpdate from '../../Components/LatestUpdate/LatestUpdate'
import Kdrama from "../../Components/Kdrama/Kdrama";
import Cdrama from "../../Components/Cdrama/Cdrama";


const Home = () => {
    const [ popularMovies, setPopularMovies ] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
        <Helmet>
            <title>Waveplay | Asian Dramas & Movies</title>
        </Helmet>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/details/${movie.id}`} key={movie?.id} className="font-roboto" >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay fon">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime items-center">
                                        <span className="posterImage__rating flex items-center gap-2">
                                            <FaStar className="text-yellow-300 text-2xl"></FaStar>
                                            <h1 className="text-xl">{movie ? movie.vote_average :""}</h1>
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                
            </div>
            <div>
                <Watching></Watching>
            </div>
            <div>
                <LatestUpdate></LatestUpdate>
            </div>
            <div>
                <Kdrama></Kdrama>
            </div>
            <div>
                <Cdrama></Cdrama>
            </div>
        </>
    )
};

export default Home;