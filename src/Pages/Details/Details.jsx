import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data=useLoaderData();
    
    return (
        <div>
            <div>
                <img className="h-[500px] w-full" src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" />
            </div>
        </div>
    );
};

export default Details;