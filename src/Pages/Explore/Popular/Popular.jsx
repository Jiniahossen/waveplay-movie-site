import { useEffect, useState } from "react";
import Movies from "../../../Components/Movies/Movies";

const Popular = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setMovie(data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (
        <div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    movie?.map(movie=><Movies key={movie.id} movie={movie}></Movies>)
                }
            </div>
        </div>
    );
};

export default Popular;
