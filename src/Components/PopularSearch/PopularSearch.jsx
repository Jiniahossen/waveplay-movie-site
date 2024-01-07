import { useEffect, useState } from "react";
import Movies from "../Movies/Movies";
import useAllDramas from "../../hooks/useAllDramas";


const PopularSearch = () => {

    const [dramas]=useAllDramas();


    const displayedPosts = dramas.slice(0, 8);

    return (
        <div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    displayedPosts?.map(movie => <Movies key={movie._id} movie={movie}></Movies>)
                }
            </div>
        </div>
    );
};

export default PopularSearch;