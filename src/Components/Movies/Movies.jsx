import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
    return (
        <div className="bg-[#494949] rounded-lg">
            <Link to={`/details/${movie?._id}`}>
                <img src={movie?.cover_image} className="w-full h-52 rounded-t-lg" alt="" />
                <div className="bg-[#494949] rounded-lg text-white py-2 font-roboto px-2">
                    <h1 className="text-start">{movie?.title}</h1>
                </div>
            </Link>
        </div>
    );
};

export default Movies;