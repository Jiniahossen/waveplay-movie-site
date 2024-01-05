import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto relative">
            {/* Backdrop image */}
            <div className="relative w-full">
                <img
                    className="h-[500px] w-full bg-opacity-40 bg-black"
                    src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
                    alt=""
                />
            </div>

            {/* Details Section */}
            <div className="flex items-end max-w-5xl justify-between mx-auto gap-10 font-roboto absolute -bottom-52 left-0 right-0 p-8">
                <div className="w-1/3">
                    <img
                        className="h-[550px] rounded-lg shadow-gray-700 shadow-xl border"
                        src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                        alt=""
                    />
                </div>

                <div className="w-2/3 text-white">
                    <h1 className="text-4xl font-roboto font-medium">{data?.title}</h1>
                    <h1 className="text-sm mt-2 font-roboto">{data?.tagline}</h1>
                    <div className="flex items-center gap-6 mt-4">
                        <span className="flex items-center gap-2">
                            <FaStar className="text-yellow-300 text-2xl"></FaStar>
                            <h1 className="text-xl">{data ? data.vote_average : ""}</h1>
                        </span>
                        <div>
                            <h1 className="text-sm">({data.vote_count} Votes)</h1>
                        </div>
                    </div>
                    <h1 className="mt-2">{data?.runtime} mins</h1>
                    <h1>Release time: {data?.release_date}</h1>
                    <div className="flex gap-4 items-center mt-3">
                        {data?.genres?.map((genre) => (
                            <button
                                className="text-sm font-roboto px-3 border py-1 rounded-3xl bg-pink-600 text-white"
                                key={genre.id}
                            >
                                {genre?.name}
                            </button>
                        ))}
                    </div>
                    <h1 className="text-xl text-black font-semibold font-roboto mt-6 mb-2">Synopsis</h1>
                    <p className="text-base text-black">{data?.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
