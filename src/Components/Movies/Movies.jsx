
const Movies = ({ movie }) => {
    return (
        <div className="bg-[#494949] rounded-lg">
            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className=" rounded-t-lg" alt="" />
            <div className="bg-[#494949] rounded-lg text-white py-2 font-roboto px-2">
                <h1>{movie?.title}</h1>
            </div>
        </div>
    );
};

export default Movies;